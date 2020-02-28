import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
const Navbar = (props) =>{
    console.log(props)
    /**
     * sin el Link el cliente hace peticiones al servidor cuando usa
     * el router de React
     * <ul className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                con el link permite renderizar la pagina deseada
                sin hacer peticiones al servidor
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            con la propiedad NavLink no solo hace las funciones del
            Link si no que tambien asigne la clase active al route!!
            <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            
     */
    return (
        <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a className="brand-logo">Poke's time</a>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        </nav>
    )
}
//export default withRouter(Navbar) con el modulo withRouter a un componente se le puede
// asignar variables de router



export default withRouter(Navbar);