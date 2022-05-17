import {createContext, useReducer} from "react";
import {appReducer} from "./reducer";

export const AppContext = createContext({})

const initialState = {
    token: '',
    user: {},
    users: [],
    name: '',
    phone: '',
    email: '',
    file: '',
    position: '',
    totalPages: 0,
    page: 1,
    refetch: false,
    validation: {
        name: false,
        email: false,
        phone: false,
        file: false
    }
}

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider
