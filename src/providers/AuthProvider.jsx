import { createContext } from "react";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {


    
    const authInfo = {
        // user,
        // loading,
        // createUser,
        // signIn,
        // googleSignIn,
        // logOut,
        // updateUserProfile
    }

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;