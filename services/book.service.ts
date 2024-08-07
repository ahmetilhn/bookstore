import { type IBook } from "~/types/IBook";
import bookClient from "./client/book.client";
import type { AxiosResponse } from "axios";

const getAllBooks = (): Promise<AxiosResponse<Array<IBook>>> => {
  return bookClient.get<Array<IBook>>("/books");
};

export default {
  getAllBooks,
};
