import { buildURL } from "../core/utils";
import { tiendaNubeApi } from "./tiendanube.service";
import { Method } from "axios";

/**
 * IMPORTANT:
 * If the functions are called from client side, it'll fetch the services from the /pages/api/tiendanube folder.
 * Where every service is using the same queryFn as this one but goes directly to the tiendaNubeApi service (since the isClientSide is false).
 * */

type QueryHandlerParams<QueryParamsType> = {
  serverEndpointPath: string[]; // The path for the Tiendanube API (server-side)
  clientApiRoutePath: string[]; // The path for the Next.js API route (client-side)
  queryParams?: QueryParamsType;
  queryKeyParts?: string[]; // Additional parts to be included in the query key
  generateKey: (keyParts: string[]) => string[]; // Function to generate the key
};

export const createQueryHandler = <ResponseType, QueryParamsType = undefined>({
  serverEndpointPath,
  clientApiRoutePath,
  queryParams,
  queryKeyParts = [],
  generateKey,
}: QueryHandlerParams<QueryParamsType>) => {
  // Filter out undefined values before generating the key
  const filteredKeyParts = queryKeyParts.filter(
    (part): part is string => part !== undefined
  );
  const queryKey = generateKey([...serverEndpointPath, ...filteredKeyParts]);

  return {
    queryKey,
    queryFn: async () => {
      const isClientSide = typeof window !== "undefined";

      if (isClientSide) {
        // Client-side: Fetch from the Next.js API route
        const response = await fetch(
          buildURL({
            path: ["api", ...clientApiRoutePath],
            queryParams: queryParams as Record<string, any>,
          })
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from API");
        }

        return response.json() as Promise<ResponseType>;
      } else {
        // Server-side: Fetch directly from Tiendanube API
        const { data } = await tiendaNubeApi.get<ResponseType>(
          buildURL({
            path: serverEndpointPath,
            queryParams: queryParams as Record<string, any>,
          })
        );

        return data;
      }
    },
  };
};

type MutationHandlerParams<QueryParamsType, BodyType> = {
  serverEndpointPath: string[]; // The path for the Tiendanube API (server-side)
  clientApiRoutePath: string[]; // The path for the Next.js API route (client-side)
  method: Method; // HTTP method (POST, PATCH, DELETE, etc.)
  queryParams?: QueryParamsType;
  generateKey: (keyParts: string[]) => string[]; // Function to generate the key
};

export const createMutationHandler = <
  ResponseType,
  QueryParamsType = undefined,
  BodyType = undefined,
>({
  serverEndpointPath,
  clientApiRoutePath,
  method,
  queryParams,
  generateKey,
}: MutationHandlerParams<QueryParamsType, BodyType>) => {
  return {
    mutationKey: generateKey([...serverEndpointPath]),
    mutationFn: async (bodyPayload?: BodyType) => {
      const isClientSide = typeof window !== "undefined";

      if (isClientSide) {
        // Client-side: Send request via the Next.js API route
        const response = await fetch(
          buildURL({
            path: ["api", ...clientApiRoutePath],
            queryParams: queryParams as Record<string, any>,
          }),
          {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: bodyPayload ? JSON.stringify(bodyPayload) : undefined,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to perform mutation on API");
        }

        return response.json() as Promise<ResponseType>;
      } else {
        // Server-side: Send request directly to Tiendanube API
        const config = {
          url: buildURL({
            path: serverEndpointPath,
            queryParams: queryParams as Record<string, any>,
          }),
          method,
          data: bodyPayload,
        };

        const { data } = await tiendaNubeApi.request<ResponseType>(config);

        return data;
      }
    },
  };
};
