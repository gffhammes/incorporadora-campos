import { useEffect, useState } from "react";


export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const { API_URL } = process.env;

  useEffect(() => {
    fetch(`${API_URL}${url}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false))
  }, [])

  return {
    data,
    error,
    isFetching,
  }
} 