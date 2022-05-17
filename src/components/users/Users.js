import React, {useContext, useEffect} from 'react';
import {Box, CircularProgress} from '@mui/material'
import {useQuery} from "react-query";
import axios from "axios";
import {Container, CustomButton, CustomTypographyH1} from "../../customComponents";
import User from "./user/User";
import {h1Styles, usersBoxStyles, usersContainerStyles} from "./Users.styles";
import {AppContext} from "../../context/context";
import {addPage, refetchUser, setRefetch, setTotalPages, setUser} from "../../context/actioinsCreators";

const fetchUsers = async (page = 1) => {
    const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
    return response.data
}

const Users = () => {
    const {state, dispatch} = useContext(AppContext)

    const onSuccess = (data) => {
        dispatch(addPage())
        if (state.refetch) {
            dispatch(setRefetch())
            dispatch(refetchUser(data.users))
        } else {
            dispatch(setUser(data.users))
        }
        dispatch(setTotalPages(data.total_pages))
    }

    const {isLoading, isFetching, refetch} = useQuery('users', () => fetchUsers(state.page), {
        onSuccess,
        refetchOnWindowFocus: false,
        refetchInterval: 100000,
        refetchIntervalInBackground: false,
        staleTime: 30000
    })

    useEffect(() => {
        if (state.refetch) {
            refetch()
        }
    }, [state.refetch])

    return (
        <Container sx={usersContainerStyles}>
            <CustomTypographyH1 sx={h1Styles}>Working with GET request</CustomTypographyH1>
            <Box sx={usersBoxStyles}>
                {state.users.map(user => (
                    <User key={user.id} {...user}/>
                ))}
            </Box>
            {isLoading || isFetching
                ? <CircularProgress color={'secondary'}/>
                : state.page <= state.totalPages && <CustomButton onClick={refetch}>Show more</CustomButton>}
        </Container>
    );
};

export default Users;