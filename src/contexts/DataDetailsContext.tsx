import React, { useState } from 'react';

import { DataDetailsContextType } from 'types/DataDetailsContextType';

interface DataDetailsContextProviderProps {
    children: React.ReactNode
}


const DataDetailsContext = React.createContext<DataDetailsContextType>({} as DataDetailsContextType)


const DataDetailsContextProvider = ({children}: DataDetailsContextProviderProps) => {
    const [itemNumber, setItemNumber] = useState(0);

    return(
        <DataDetailsContext.Provider value={{itemNumber, setItemNumber}}>
            {children}
        </DataDetailsContext.Provider>
    )
}

export {DataDetailsContext, DataDetailsContextProvider}