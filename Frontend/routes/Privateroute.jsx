import {Navigate} from 'react-router-dom'
import {useAuth} from '../../Frontend/src/auth/Authcontext'

const PrivateRoute = ({role,childern})=>{
    const {auth} = useAuth()

    if(!auth.user) return <Navigate to='/login'/>
    if(auth.user.role !== role) return <Navigate to='/'/>
    return childern
}

export default PrivateRoute;