import React, { useEffect } from 'react'
import Loader from '../../components/layouts/animations/Loader';
// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../utils/redux/actions/UserActions'


export default function ListUsers() {
    const dispatch = useDispatch();

    const { loading, users } = useSelector(state => state.users)
    console.log(users);

    useEffect(() => {
        dispatch(getUsers());

    }, [dispatch])
    
    return loading
        ?   <Loader />
        :   <div style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            List Users
                {/* USERS */}
                {users.map((item) => {
                    return(
                        <div style={{ background: "red", fontSize: "3em" }}>
                            {item.firstName}
                        </div>
                    )
                })}
            </div>
}
