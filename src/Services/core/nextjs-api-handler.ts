import { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export const customNextApiHandler =
  <T>(handler: (req: NextApiRequest) => Promise<T>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const result = await handler(req);
      res.status(200).json(result);
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        res
          .status(error.response.status || 500)
          .json({ error: error.response.data });
      } else {
        res.status(500).json({ error: "An unexpected error occurred" });
      }
    }
  };
