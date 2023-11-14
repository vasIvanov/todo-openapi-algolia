import algoliasearch from "algoliasearch";
import { Schema } from "../models/Todo";
import { createServiceError } from "./utils";

export const todoService = () => {
  const getTodos = async (id: string) => {
    try {
      const result = await Schema.find();

      return result;
    } catch (e: unknown) {
      createServiceError(e);
    }
  };

  const createTodo = async (data: any) => {
    console.log(data);

    const searchClient = algoliasearch(
      process.env.AlgoliaApplicationID ?? "",
      process.env.AlgoliaSearchOnlyAPIKey ?? ""
    );
    const index = searchClient.initIndex("dev_test");

    // const res = await index.saveObject(data);
    // console.log(res);

    try {
      const todo = new Schema(data);

      const result = await todo.save();

      await index.saveObject({
        ...data,
        objectID: result._id,
      });

      return result;
    } catch (e: unknown) {
      createServiceError(e);
    }
  };

  const deleteTodo = async (id: number) => {};

  return { getTodos, createTodo, deleteTodo };
};
