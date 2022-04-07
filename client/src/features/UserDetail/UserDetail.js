import { useAuth0 } from "@auth0/auth0-react"
import { useSelector } from "react-redux"
import './UserDetail.css'

export default function UserDetail (props){
    const { logout, isAuthenticated, user } = useAuth0()

    let userValidated = useSelector( state => state.userReducer.status.user )
    let isUserAuthenticated = isAuthenticated || userValidated
    return (<>


            {JSON.stringify(userValidated) + 'status'}
        
        {isUserAuthenticated && <div>
            <img  className="userImgOnprofile" src={user?.picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU" }></img>
            <div>{user?.name || userValidated.name } </div>
            <div>{user?.email || userValidated.email} </div>
            {/* {JSON.stringify(user)} */}
            <button className="logoutbtn" onClick={ () => logout()}>LOGOUT</button>
            
        </div>
            }
        
    
    
    
    </>)
}