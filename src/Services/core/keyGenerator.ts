export type ServiceKey = string[];

export const generateKey = (...pathKeys: string[]): ServiceKey => [...pathKeys];

export const apiKeyFactory = ({
  repositoryKey,
  serviceKey,
}: {
  repositoryKey: string;
  serviceKey: string;
}) => {
  return {
    generateKey: (pathKeys: (string | undefined)[]): ServiceKey => {
      return [
        repositoryKey,
        serviceKey,
        ...pathKeys.filter((key): key is string => !!key),
      ];
    },
  };
};
