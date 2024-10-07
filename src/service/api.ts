import AxiosService from './axios-service'

// App axios service
export const AppApi = new AxiosService({
  baseUrl: 'https://api.graph.hesamt.com' as string,
})
