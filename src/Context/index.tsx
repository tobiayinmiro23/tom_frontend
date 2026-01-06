import React, { createContext, useState } from 'react'
import { generalContextI } from '../Types';
export const appContext = createContext<generalContextI | null>(null)

const Context = ({ children }: { children: React.ReactNode; }) => {

    const [username, setusername] = useState('')
    const [userid, setuserid] = useState('')

    return (
        <appContext.Provider value={{ username, setusername, userid, setuserid }}>
            {children}
        </appContext.Provider>
    )
}
export default Context