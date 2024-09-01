import { useState, useEffect } from "react";
import { FetchOpenMeteo } from "../api/fetchOpenMeteo";

export default function useOpenMeteo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await FetchOpenMeteo();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);
  return { data, loading };
}
