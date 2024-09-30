export type BuildUrlQueryParams = Record<string, string | number | boolean | string[] | undefined>
export type BuildUrlPath = string[];
export type BuildUrlParams = {
  path: BuildUrlPath;
  queryParams?: BuildUrlQueryParams;
};

export const appendParamsToUrl = (
  url: string,
  queryParams: BuildUrlParams["queryParams"]
): string => {
  const queryParamsString = Object.entries(queryParams || {})
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => {
      if (value !== undefined) {
        return `${encodeURIComponent(key)}=${encodeURIComponent(
          String(value)
        )}`;
      }
      return "";
    })
    .filter((param) => param !== "")
    .join("&");

  if (!queryParamsString) {
    return url;
  }

  if (url.includes("?")) {
    return `${url}&${queryParamsString}`;
  } else {
    return `${url}?${queryParamsString}`;
  }
};

export const buildURL = ({ path, queryParams }: BuildUrlParams) =>
  appendParamsToUrl(`${path.join("/")}`, queryParams || {});
