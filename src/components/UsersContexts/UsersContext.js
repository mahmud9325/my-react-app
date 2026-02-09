import { createContext, useReducer} from "react";
import { initialState, reducer } from "./UserReducer";

export const UsersContext = createContext({});

 export const UserProvider = ({children}) => {

   const [state, dispatch] = useReducer(reducer, initialState);

    
    return <UsersContext.Provider value={{state, dispatch}}>
        {children}
    </UsersContext.Provider>
}