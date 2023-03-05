import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// REDUX
import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../../../utils/redux/actions/AuthActions'
// DATA
import { dataMenuToggle } from '../../../utils/assets/data/layouts/DataMenuToggle';
// IMGS
import logo from "../../../utils/assets/imgs/layouts/logoWithoutBG.png";
// ICONS
import { GiShoppingCart } from "react-icons/gi";
// import Auth from '../../../screens/auth/Auth';



export default function NavbarDesktop() {

    // SCROLL NAV
    const [nav, setNav] = useState(false)
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        }else{
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    // // STATES STORE REDUX
    // const { user, loading } = useSelector(state => state.auth)
    // // console.log(user);
    // const { cartItems } = useSelector(state => state.cart)

    // REDUX AUTH ACTIONS
    const dispatch = useDispatch();
    const navigate = useNavigate;

    const logoutHandler = (e) => {
        // e.preventDefault();
        // dispatch(logout());
        // navigate("/");
        // alert.success('Logged out successfully.')
    }

    // Show Toggle Menu
    const [showToggleMenu, setShowToggleMenu]=useState(false)

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to="../" className="logo">
                <img src={logo} alt="logo" style={{ height: "120px", width: "130px"}} />
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn" >
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="main">Accueil</Link></li>
                <li><Link to="products">Produits</Link></li>
                <li><Link to="upcomingEvents">Événements à venir</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
            
            <Link to="/login">Login</Link>


            {/* {user ? (
                <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                    <button onClick={()=>setShowToggleMenu(!showToggleMenu)}>
                        {user.lastname
                            ? `${user.lastname}`
                            : "Nom défini"
                        }
                    </button> 
                    {showToggleMenu
                        ?   <ul style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                                {dataMenuToggle.map((menuItem, index) => (
                                    <Link to={menuItem.to} key={index}>
                                        <li>
                                            <menuItem.icon />
                                            {menuItem.name}
                                        </li>
                                    </Link>
                                ))}
                                <div onClick={logoutHandler}>Déconnexion</div>
                            </ul>
                        : null
                    }
                </div>
            ) : !loading &&
                    <>
                        <Auth />
                    </> 
            } */}
            
    

            <Link to="/panier">
                {/* <GiShoppingCart size={45} />{cartItems.length === 0 ? "" : cartItems.length} */}
            </Link>
        </nav>
    )
}
