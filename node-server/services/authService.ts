import { Schema } from "../models/User";
import { createServiceError } from "./utils";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const authService = () => {
  const register = async ({ password, username }: any) => {
    if (!username || !password) {
      throw {
        status: 400,
        message: "Missing username or password",
      };
    }
    const oldUser = await Schema.findOne({ username });

    if (oldUser) {
      throw {
        status: 409,
        message: "User already exists",
      };
    }

    try {
      //Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = await Schema.create({
        username,
        password: encryptedPassword,
      });

      // Create token
      const token = jwt.sign(
        { id: user._id, username },
        process.env.TOKEN_KEY ?? "",
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      return user;
    } catch (e: unknown) {
      createServiceError(e);
    }
  };

  const login = async ({ password, username }: any) => {
    if (!username || !password) {
      throw {
        status: 400,
        message: "Missing username or password",
      };
    }
    const user = await Schema.findOne({ username });

    try {
      if (
        user &&
        user.password &&
        (await bcrypt.compare(password, user.password))
      ) {
        // Create token
        const token = jwt.sign(
          { id: user._id, username },
          process.env.TOKEN_KEY ?? "",
          {
            expiresIn: "2h",
          }
        );

        // save user token
        user.token = token;

        return user;
      }
    } catch (e: unknown) {
      createServiceError(e);
    }

    throw {
      status: 400,
      message: "Invalid Credentials",
    };
  };

  return { register, login };
};
