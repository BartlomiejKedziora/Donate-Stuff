import React, { useEffect, useState, useContext } from 'react';
import app from 'firebase/app';



export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);


    
    console.log(currentUser);

    return (
        <AuthContext.Provider
            value={currentUser} >
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;