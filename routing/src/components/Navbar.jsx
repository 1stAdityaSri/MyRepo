import React from 'react'
import { Link } from 'react-router-dom'

const Navbar= ()=>{

return(
<>
<div>
    navbar toh hai
    <Link to="/about"><li>About</li></Link>
        <Link to="/home"><li>Home</li></Link>

    <Link to="/login"><li>Login</li></Link>
</div>


</>

)

}

export default Navbar