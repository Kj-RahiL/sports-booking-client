import { baseApi } from "../../api/baseApi"

const facilityApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
      createFacility : builder.mutation({
          query:(facilityData)=>({
              url: "facility",
              method: "POST",
              body: facilityData
          })
      }),
      getAllFacility : builder.query({
          query:()=>({
              url: "facility",
              method: "GET"
          })
      }),
      getSingleFacility : builder.query({
          query:(id)=>({
              url: `facility/${id}`,
              method: "GET"
          })
      }),
      updateFacility : builder.mutation({
          query:({id, ...updatedData})=>({
              url: `facility/${id}`,
              method: "PATCH",
              body: updatedData
          })
      }),
      deleteFacility : builder.mutation({
          query:(id)=>({
              url: `facility/${id}`,
              method: "DELETE"
          })
      }),
    
    })
  })
  
  export const {useCreateFacilityMutation, useGetAllFacilityQuery, useGetSingleFacilityQuery, useUpdateFacilityMutation, useDeleteFacilityMutation} = facilityApi