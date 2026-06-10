import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/lib/redux/store";
import { setCredentials, logout } from "@/lib/redux/features/auth/authSlice";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  credentials: "include", // IMPORTANT if your refresh token is in httpOnly cookies
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) headers.set("authorization", `Bearer ${token}`);
    headers.set("accept", "application/json");
    return headers;
  },
});

/**
 * If API returns 401, try refresh endpoint once, then retry original request.
 * Adjust refresh endpoint/response shape to match your backend.
 */
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // attempt refresh
    const refreshResult = await rawBaseQuery(
      { url: "/auth/refresh", method: "POST" },
      api,
      extraOptions,
    );

    if (refreshResult.data && typeof refreshResult.data === "object") {
      // Expecting: { accessToken: "..." }
      const data = refreshResult.data as { accessToken: string };
      if (data.accessToken) {
        api.dispatch(setCredentials({ accessToken: data.accessToken }));
        // retry original query
        result = await rawBaseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Testimonial"],
  endpoints: () => ({}),
});
