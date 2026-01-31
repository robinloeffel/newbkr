import createClient from "openapi-fetch";
import type { paths } from "../types/ibkr";

export const client = createClient<paths>({
  baseUrl: import.meta.env.DEV
    ? "https://qa.interactivebrokers.com/"
    : "https://api.ibkr.com/"
});
