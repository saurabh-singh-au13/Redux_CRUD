import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//created an api service from line 1 to 19
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    // query to get all data
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    //query to get data by id
    getPostById: builder.query({
      query: (id) => {
        console.log("ID :", id);
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
    //query to get data by specific limit
    getLimitedData: builder.query({
      query: (num) => ({
        url: `posts?_start=0&_limit=${num}`,
        method: "GET",
      }),
    }),
    //query to delete data
    deleteDataById: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
    //adding new post
    addNewPost: builder.mutation({
      query: (newPost) => ({
        url: `posts`,
        method: "POST",
        body: newPost,
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }),
    }),
    // Updating post here
    updatePost: builder.mutation({
      query: (updating) => {
        const { id, ...data } = updating;
        console.log(data, "dataaaaaaaa");
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          headers: { "Content-type": "application/json; charset=UTF-8" },
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetLimitedDataQuery,
  useDeleteDataByIdMutation,
  useAddNewPostMutation,
  useUpdatePostMutation,
} = postApi;
