import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = () => {
    // TO DO
    setCurrentUser({
      id:1, 
      name:"John Doe", 
      profilePic:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      });
  };

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return(
    <AuthContext.Provider value={{currentUser, login}}>
      {children}
    </AuthContext.Provider>
  )
};