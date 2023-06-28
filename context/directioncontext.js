import React, {useState} from "react";
import {useRouter} from "next/router"
export const DirectionContext = React.createContext();
export default function DirectionProvider({children}) { 
    const router=useRouter()
    const [routerState, setRouterState] = useState(router.asPath);
    function GetDirection(path) {
        let direction=true;
        console.log(`Path: ${path}`)
        console.log(`State: ${routerState}`)
        if(path!=routerState) {
            if(routerState=="/socials") {
                direction=false // Go up
            }
            if(routerState=="/") {
                direction=true // Go down
            }
            if(routerState=="/projects" && path=="/") {
                direction=false // Go up
            }
            if(routerState=="/projects" && path=="/socials") {
                direction=true // Go down
            }
            setRouterState(path)
        }
        
        return direction
    }
    return(
        <DirectionContext.Provider value={{lastState:routerState, setLastState:setRouterState}}>
            {children}
        </DirectionContext.Provider>
    )
}