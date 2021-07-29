import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://jsonplaceholder.typicode.com';

interface Photo {
  albumId: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const photoApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders(headers) {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query<Photo[], number | void>({
        query(limit = 10) {
          return `/photos?_limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchPhotosQuery } = photoApiSlice;
