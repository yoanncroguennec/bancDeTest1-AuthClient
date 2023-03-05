import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/layouts/animations/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../utils/redux/actions/AuthActions'


export default function Register({ }) {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const { firstName, lastName, email, password } = user;

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/imgs/default_avatar.jpg')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if (isAuthenticated) {
            navigate(`/`)
        }

        // if (error) {
        //     alert.error(error);
        //     dispatch(clearErrors());
        // }

    }, [dispatch, isAuthenticated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('firstName', firstName);
        formData.set('lastName', lastName);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('avatar', avatar);

        dispatch(register(formData))
    }

    const onChange = e => {
        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }



    return  loading ? <Loader />
       : <>
            <div>
                <div>
                    <form onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1>S'Inscrire</h1>

                        <div>
                            <label htmlFor="firstName_field">Prénom</label>
                            <input
                                type="firstName"
                                id="firstName_field"
                                name='firstName'
                                value={firstName}
                                onChange={onChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName_field">Nom de famille</label>
                            <input
                                type="lastName"
                                id="lastName_field"
                                name='lastName'
                                value={lastName}
                                onChange={onChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                name='email'
                                value={email}
                                onChange={onChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="password_field">Mot de passe</label>
                            <input
                                type="password"
                                id="password_field"
                                name='password'
                                value={password}
                                onChange={onChange}
                            />
                        </div>

                        <div>
                            <label htmlFor='avatar_upload'>Avatar</label>
                            <div>
                                <div>
                                    <figure>
                                        <img
                                            src={avatarPreview}
                                            alt='Avatar Preview'
                                            style={{ width: "150px"}}
                                        />
                                    </figure>
                                </div>
                                <div>
                                    <input
                                        type='file'
                                        name='avatar'
                                        id='customFile'
                                        accept="iamges/*"
                                        onChange={onChange}
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choisir Avatar
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            id="register_button"
                            type="submit"
                            disabled={loading ? true : false}
                        >
                            Enregistrez
                        </button>
                    </form>
                </div>
            </div>
        </>
}
