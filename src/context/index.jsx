import { createContext, useState } from 'react'

export const NavbarContext = createContext()


export const NavbarContextProvider = ({ children }) => {
    const [title, setTitle] = useState('Obyektlar ro‘yhat');
    const [link,setLink] = useState();
    const [link2,setLink2] = useState();
    const [linkHeader,setLinkHeader] = useState();
    const [linkText,setLinkText] = useState();
    const [linkText2,setLinkText2] = useState()
    const [svg, setSvg]= useState(false)
    const [btn, setBtn]= useState(false)

    return <NavbarContext.Provider 
        value={{ title, setTitle, link, setLink, linkText, setLinkText, linkText2, setLinkText2, linkHeader, setLinkHeader, link2, setLink2, svg, setSvg, btn, setBtn}}>
        {children}
    </NavbarContext.Provider>
}



