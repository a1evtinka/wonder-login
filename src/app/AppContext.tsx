import { createContext, useState } from 'react';

interface IContext {
    children: React.ReactNode;
}

interface IAppContext {
    isMoving: boolean;
    setIsMoving: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: IContext) => {
    const [isMoving, setIsMoving] = useState(true);

    return (
        <AppContext.Provider value={{ isMoving, setIsMoving }}>
            {children}
        </AppContext.Provider>
    );
};