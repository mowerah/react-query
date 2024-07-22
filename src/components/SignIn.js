import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { setUser } from "../features/auth/authSlice";
import { signIn } from "../api/authApi";

const SignIn = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const mutation = useMutation(signIn, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
