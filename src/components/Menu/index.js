import React from 'react';
import  { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

function Menu () {
   return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo"  src={Logo} alt="Logo" /> 
            </Link>
            <Button  as={Link} className="ButtonLink" to="./Pages/Cadastro/Video">
                    Novo video  
            </Button>
        </nav>

        
   );
}

export default Menu;