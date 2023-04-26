import { useEffect, useState } from "react";

export const useFetch = <T = unknown>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const { API_URL } = process.env;

  useEffect(() => {
    fetch(`${API_URL}${url}`)
      .then(async (res) => {
        const data = await res.json();

        setData(data);
      })
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    error,
    isFetching,
  };
};
