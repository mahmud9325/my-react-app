import { useContext } from "react";
import { UsersContext } from "./UsersContext";



const UseUserContext = () => {
    return  useContext(UsersContext);
}

export default UseUserContext;