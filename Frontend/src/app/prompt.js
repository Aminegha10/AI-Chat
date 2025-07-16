import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const prompt = createApi({
  reducerPath: "prompt",
  baseQuery: fetchBaseQuery({ baseUrl: "https://" }),
  endpoints: (builder) => ({
    getPrompt: builder.query({
      query: () =>
        "n8n.srv883668.hstgr.cloud/webhook/b498f4c3-342a-4ba5-8af7-3a14959de051",
      // production https://n8n.srv883668.hstgr.cloud/webhook/b498f4c3-342a-4ba5-8af7-3a14959de051
      providesTags: ["Prompt"],
    }),
    addPrompt: builder.mutation({
      query: (body) => ({
        url: "n8n.srv883668.hstgr.cloud/webhook/15bc8b8b-f2a5-4e9d-879d-b71a9761872d",
        // production https://n8n.srv883668.hstgr.cloud/webhook/15bc8b8b-f2a5-4e9d-879d-b71a9761872d
        method: "POST",
        body,
      }),
      invalidatesTags: ["Prompt"],
    }),
  }),
});

// Export the auto‑generated hooks
export const { useGetPromptQuery, useAddPromptMutation } = prompt;
