import React, { useState, useEffect } from "react";

function useFetchDataGeneric<T>(url: string): {
  data: T[] | null;
  loading: boolean;
} {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((jsonData: any) => {
        setLoading(false);
        setData(jsonData);
      });
  }, [url]);
  return {
    loading,
    data,
  };
}

export default useFetchDataGeneric;
