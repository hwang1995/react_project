import { useState, createContext } from 'react';

const AppContext = createContext({
    uid: '',
    setUid: () => {},
    authToken: '',
    setAuthToken: () => {},
});

export function AppContextProvider(props) {
    const [uid, setUid] = useState('');
    const [authToken, setAuthToken] = useState('');

    const value = {
        uid, setUid, authToken, setAuthToken,
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;