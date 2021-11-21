import { useState, useEffect } from 'react';

const useLoadUsers = (loadFunction) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    loadFunction()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => setIsFetching(false));
  });
  return { data, isFetching, isError };
};

export default useLoadUsers;
