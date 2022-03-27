import React from "react";
import useGetUsers from "./useGetUsers";

const Users = () => {
  const { currentUsers } = useGetUsers;

  return (
    <>
      <div>{currentUsers?.title}</div>
      <div>{currentUsers?.userId}</div>
      <div>{currentUsers?.completed}</div>
    </>
  );
};

export default Users;
