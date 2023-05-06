import { createContext } from "react";

const ContextApi = createContext({
    userData: {},
    setUserData: () => { },
    userLogin: false,
    setUserLogin: () => { },
    products: [],
    setProducts: () => { }
})
export default ContextApi;