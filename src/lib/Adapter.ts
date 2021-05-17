/* eslint-disable @typescript-eslint/ban-types */
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface IRequestOptions {
  header?: object;
  params?: object;
}

class Adapter {
  private http: AxiosInstance;

  constructor(private baseUrl = '') {
    this.http = axios.create({ baseURL: this.baseUrl, headers: '' });
  }

  async get<T>(
    url: string,
    requestOptions?: IRequestOptions
  ): Promise<AxiosResponse<T>> {
    return this.http.get(url, {
      params: requestOptions?.params,
      headers: requestOptions.header,
    });
  }
  async post<T>(
    url: string,
    body: object,
    requestOptions?: IRequestOptions
  ): Promise<AxiosResponse<T>> {
    const header = {
      params: requestOptions?.params,
      headers: requestOptions.header,
    };

    return this.http.post(url, body, {
      params: requestOptions?.params,
      headers: header,
    });
  }
  async put<T>(
    url: string,
    body: object,
    requestOptions?: IRequestOptions
  ): Promise<AxiosResponse<T>> {
    const header = {
      params: requestOptions?.params,
      headers: requestOptions.header,
    };

    return this.http.put(url, body, {
      params: requestOptions?.params,
      headers: header,
    });
  }
  async delete<T>(
    url: string,
    body?: object,
    requestOptions?: IRequestOptions
  ): Promise<AxiosResponse<T>> {
    const header = {
      params: requestOptions?.params,
      headers: requestOptions.header,
    };

    return this.http.delete(url, {
      params: requestOptions?.params,
      headers: header,
      data: body,
    });
  }
}

export default Adapter;
