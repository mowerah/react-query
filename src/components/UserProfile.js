import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getUserInfo } from "../api/authApi";

const UserProfile = () => {
  const { data, error, isLoading } = useQuery("userInfo", getUserInfo);
  const user = useSelector((state) => state.auth.user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {data?.email}</p>
      <p>Username: {data?.username}</p>
      {/* Add other user info here */}
    </div>
  );
};

export default UserProfile;