import { createServiceError } from "./utils";

export const healthService = () => {
  const check = async () => {
    try {
      return "OK";
    } catch (e: unknown) {
      createServiceError(e);
    }
  };

  return { check };
};
