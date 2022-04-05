import { useAuth0 } from "@auth0/auth0-react"
import './UserDetail.css'

export default function UserDetail (props){
    const { logout, isAuthenticated, user } = useAuth0()

    return (<>


        
        {isAuthenticated && <div>
            <img  className="userImgOnprofile" src={user.picture}></img>
            <div>{user.name} </div>
            <div>{user.email} </div>
            {/* {JSON.stringify(user)} */}
            <button className="logoutbtn" onClick={ () => logout()}>LOGOUT</button>
            
        </div>
            }
        
    
    
    
    </>)
}