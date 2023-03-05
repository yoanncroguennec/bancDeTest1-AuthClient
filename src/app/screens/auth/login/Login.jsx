import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Box, Modal, Fade, Typography, Button } from '@mui/material';
// COMPONENTS LAYOUTS
import { StylesTextFieldForm } from '../../../components/layouts/styles/StylesTextFieldForm'
import Loader from '../../../components/layouts/animations/Loader'
// REDUX
import { useDispatch, useSelector } from "react-redux"
import { login } from '../../../utils/redux/actions/AuthActions'


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if (isAuthenticated) {
            navigate(`/`)
        }

        // if (error) {
        //     alert.error(error)
        //     dispatch(clearErrors())
        // }

    }, [dispatch, isAuthenticated, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    
    return loading
                ?   <Loader />
                :   <>
                        <>
                            <>
                                <form onSubmit={submitHandler} style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <h4>Se connecter</h4>
                                    <StylesTextFieldForm
                                        InputLabelProps={{
                                            style: { color: '#000' }
                                        }}
                                        inputProps={{
                                            style: { color: "#000" }
                                        }}
                                        label="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{ margin : "15px", width: "350px" }}
                                        type="text"
                                        value={email}
                                    />
                                    <StylesTextFieldForm
                                        InputLabelProps={{
                                            style: { color: '#000' }
                                        }}
                                        inputProps={{
                                            style: { color: "#200" }
                                        }}
                                        label="Mot de passe"
                                        style={{ margin : "15px", width: "350px" }}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                    <Link to="/password/forgot">Mot de passe perdu ?</Link>
                                    <Button id="login_button" type="submit">Se connecter</Button>
                                </form>
                            </>
                        </>
                    </>
}
