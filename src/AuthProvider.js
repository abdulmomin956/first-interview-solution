import React, { createContext, useReducer } from 'react';
export const AuthContext = createContext({});

//Provider
function init(initialState) {
    return initialState;
}
const initialState = {};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return init(action.payload);
        default:
            throw new Error();
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state);
    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;
