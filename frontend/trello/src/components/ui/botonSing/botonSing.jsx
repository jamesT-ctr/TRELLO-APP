import './botonSing.css'
import {Link} from 'react-router-dom'
export const BotonSingin = () => {
    return (
        <Link to={"/login"}>
            <a>LOGIN</a>
        </Link>
    ) 
    
}