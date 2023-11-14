import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import openApiDocumentation from "./openapi.json";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import verifyToken from "./middleware/auth";

(async () => {
  dotenv.config();
  const app: Express = express();
  const port = process.env.PORT;
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
  app.use(bodyParser.json());
  app.use(cookieParser());

  // app.get("/get-cookie", (req, res) => {
  //   const cookieValue = req.cookies.token; // Access the value of the cookie
  //   console.log(cookieValue);

  //   res.send(`Value of cookie: ${cookieValue}`);
  // });

  //Protected route
  app.get("/welcome", verifyToken, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

  //Clear token in cookie
  app.post("/logout", verifyToken, (req, res) => {
    res.clearCookie("token");
    res.status(200).send("Cookie cleared");
  });

  routes(app);
  try {
    await mongoose.connect(process.env.MONGO_URL ?? "");
    console.log("DB connected");
  } catch (error: any) {
    console.log("DB connection error: ", error.message);
  }

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
})();
