import axios, { AxiosRequestConfig, AxiosError } from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

type Packet =
  | unknown[]
  | string
  | number
  | boolean
  | Record<string, unknown>
  | FormData;

type Response<T> = {
  statusCode: string | null;
  data: T | null;
};

const DEFAULT_TIMEOUT = 60000;

const Config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Authorization: null,
  },
};

async function GET<T>(
  url: string,
  params?: Record<string, unknown>
): Promise<Response<T>> {
  try {
    const controller = new AbortController();
    Config.signal = controller.signal;
    Config.params = params;
    const response = await axios.get<T>(`${BASE_URL}${url}`, Config);
    return {
      statusCode: response.status.toString(),
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      return {
        statusCode: axiosError.response?.status.toString() || ("500" as string),
        data: null,
      };
    } else {
      return {
        statusCode: "500" as string,
        data: null,
      };
    }
  }
}

async function POST<T>(
  url: string,
  data: Packet | FormData,
  isFormData?: boolean
): Promise<Response<T>> {
  try {
    const controller = new AbortController();
    Config.signal = controller.signal;
    if (isFormData) {
      console.log("content-type", "multipart/form-data");
      Config.headers!["Content-Type"] = "multipart/form-data";
    } else {
      Config.headers!["Content-Type"] = "application/json";
    }
    const response = await axios.post<T>(`${BASE_URL}${url}`, data, Config);
    return {
      statusCode: response.status.toString(),
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      return {
        statusCode: axiosError.response?.status.toString() || ("500" as string),
        data: null,
      };
    } else {
      return {
        statusCode: "500" as string,
        data: null,
      };
    }
  }
}

export default { GET, POST };
