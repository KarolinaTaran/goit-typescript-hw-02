import axios, { AxiosResponse } from "axios";

// import { Image } from "../imageCard/ImageCard";
import { PicsResponse } from "../../App";

const ACCESS_KEY = "koIxD-H7FXNiGBFhuJFP3mDWSx3jDApFHYZ-bNUD84I";

export const requestPicsByQuery = async (
  query: string,
  page: number
): Promise<PicsResponse> => {
  const response: AxiosResponse<PicsResponse> = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=20`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  return response.data;
};
