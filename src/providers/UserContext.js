import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const [user] = useState({
        name: 'john',
        email: 'john@example.com',
        dob: '10/10/2015'
    })
    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);