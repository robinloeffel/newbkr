import { PUBLIC_OPENAPI_BASE_URL } from "$env/static/public";
import type { paths } from "$types/ibkr";
import createClient from "openapi-fetch";

export const client = createClient<paths>({
  baseUrl: PUBLIC_OPENAPI_BASE_URL
});
