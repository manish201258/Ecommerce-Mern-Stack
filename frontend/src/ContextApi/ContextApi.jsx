import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) setUser({ token });
  }, []);

  const register = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, data);
      const { token } = res.data;
      Cookies.set("token", token);
      setUser({ token });
      console.log("Registered");
    } catch (e) {
      console.log(e);
    }
  };

  const login = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, data);
      const { token } = res.data;
      Cookies.set("token", token);
      setUser({ token });
      console.log("Logged in");
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
