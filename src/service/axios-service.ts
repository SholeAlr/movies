import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

type ServiceOptions = {
  baseUrl: string
}

class AxiosService {
  private axiosInstance: AxiosInstance

  constructor({ baseUrl }: ServiceOptions) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    })

    this.setupInterceptorsRequest()
    this.setupInterceptorsResponse()
  }

  private setupInterceptorsRequest() {
    this.axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )
  }

  private setupInterceptorsResponse() {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )
  }

  public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.get(url, config)
  }

  public post<T = undefined>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axiosInstance.post(url, data, config)
  }

  public put<T = undefined>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axiosInstance.put(url, data, config)
  }

  public del(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.delete(url, config)
  }
}

export default AxiosService
