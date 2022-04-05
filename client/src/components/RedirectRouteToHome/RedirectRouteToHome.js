import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function (){
    let nav = useNavigate()
    useEffect( ()=> {
        console.log(window.location.pathname)
        nav('./home')
    }, [])
    return (<>
    
        ROOT ROUTE
        
    </>)
}