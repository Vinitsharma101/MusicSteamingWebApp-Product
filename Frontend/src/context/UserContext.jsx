
import { useState } from "react";
import { UserDataContext } from "./UserDataContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    Username: "",
    email: "",
  });

  return (
    <UserDataContext.Provider value={[user, setUser]}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserProvider;
