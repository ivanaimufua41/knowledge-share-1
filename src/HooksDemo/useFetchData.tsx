import React, { useState, useEffect } from "react";

const useFetchData = (
  url: string
): {
  data: any[];
  loading: any;
} => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((jsonData: any) => {
        setLoading(false);
        setData(jsonData.data);
      });
  }, [url]);


  return {
    loading,
    data,
    
  };
};

export default useFetchData;
