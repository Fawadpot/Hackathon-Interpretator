import axios from 'axios';
import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const source = axios.CancelToken.source();
  
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axiosInstance(url, {
            cancelToken: source.token,
            ...options,
          });
          setData(response.data);
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log('Request canceled', err.message);
          } else {
            setError(err.message);
          }
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
  
      return () => {
        source.cancel('Operation canceled by the user.');
      };
    }, [url]);
  
    return { data, loading, error };
  };
  
  export default useFetch;