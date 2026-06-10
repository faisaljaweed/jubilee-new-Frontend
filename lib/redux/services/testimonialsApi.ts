import { baseApi } from "@/lib/redux/services/baseApi";

type ApiResponse<T> = {
  status: "success" | "error";
  data?: T;
  message?: string;
};

export type Testimonial = {
  _id: string;
  ratings: number;
  name: string;
  testimonialText: string;
  profilePicture: string;
  createdAt?: string;
  updatedAt?: string;
};

// If your API returns pagination object, adjust this.
// For now this supports either array OR a paginated object.
export type TestimonialsList =
  | Testimonial[]
  | {
      docs?: Testimonial[];
      data?: Testimonial[];
      page?: number;
      limit?: number;
      total?: number;
      results?: number;
    };

export const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTestimonials: builder.query<
      TestimonialsList,
      Record<string, unknown> | void
    >({
      query: (params) => ({
        url: "/testimonials",
        method: "GET",
        params: params ?? undefined,
        credentials: "omit",
      }),
      transformResponse: (res: ApiResponse<TestimonialsList>) => res.data ?? [],
      providesTags: (result) => {
        const list: Testimonial[] = Array.isArray(result)
          ? result
          : ((result?.docs || result?.data || []) as Testimonial[]);

        return list.length
          ? [
              ...list.map((t) => ({ type: "Testimonial" as const, id: t._id })),
              { type: "Testimonial" as const, id: "LIST" },
            ]
          : [{ type: "Testimonial" as const, id: "LIST" }];
      },
    }),

    // Optional: only keep if you need it later
    getTestimonialById: builder.query<Testimonial, string>({
      query: (id) => ({
        url: `/testimonials/${id}`,
        method: "GET",
      }),
      transformResponse: (res: ApiResponse<Testimonial>) =>
        res.data as Testimonial,
      providesTags: (_res, _err, id) => [{ type: "Testimonial", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllTestimonialsQuery,
  useGetTestimonialByIdQuery, // optional
} = testimonialsApi;
