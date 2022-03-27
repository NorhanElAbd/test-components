import React, { useEffect, useState } from "react";

const useGetUsers = () => {
  const [currentUsers, setCurrentUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setCurrentUsers(json));
  }, []);

  return currentUsers;
};

export default useGetUsers;
