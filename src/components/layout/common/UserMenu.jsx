import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useLogout from '../../../hooks/useLogout';

const UserMenu = ({ OpenUserMenu, setOpenUserMenu }) => {


    const [logOut] = useLogout()


    let nameUser = useSelector((state) => state.auth.userLogin?.userData?.name) || JSON.parse(localStorage.getItem("user"))?.userData?.name;
    nameUser = nameUser && nameUser.toUpperCase() + " ";
    return (
        <div>
            <div className="navbar__nav__user">
                <div className="navbar__nav__user__button" onClick={() => setOpenUserMenu(!OpenUserMenu)} >
                    {nameUser ? <span className="navbar__nav__user__button__username">{nameUser}</span> : ''}
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={`navbar__nav__user__menu ${OpenUserMenu && "active-menu"}`} >
                    <button onClick={logOut} to="#"> Cerrar Sesión </button>
                    <Link to="/usuario/miscompras"> Mis Compras </Link>
                </div>
            </div>
        </div>
    )
}

export default UserMenu
