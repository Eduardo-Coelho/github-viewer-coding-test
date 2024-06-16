import { useState, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

interface UseAxiosReturn {
  loading: boolean;
  get: (url: string) => Promise<AxiosResponse<any, any>>;
}

export const useAxios = (): UseAxiosReturn => {
  const [loading, setLoading] = useState<boolean>(false);

  const get = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, get };
};
