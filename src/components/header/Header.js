import React, {useContext} from 'react';
import {AppBar, Box, Toolbar} from '@mui/material'
import {CustomButton, Container} from "../../customComponents";
import Logo from '../../assets/Logo.svg'
import {useQuery} from "react-query";
import axios from "axios";
import {AppContext} from "../../context/context";
import {setToken} from "../../context/actioinsCreators";
import {headerAppBarStyles} from "./Header.styles";

const getToken = async () => {
    const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    return response.data
}

const Header = () => {
    const {dispatch} = useContext(AppContext)
    const onSuccess = data => dispatch(setToken(data.token))
    const {} = useQuery('token', getToken, {
        refetchOnWindowFocus: false,
        refetchInterval: 300000,
        onSuccess,
    })

    return (
        <AppBar sx={headerAppBarStyles} position={'static'}>
            <Toolbar>
                <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <img src={Logo} alt="Logo Header"/>
                    <Box>
                        <CustomButton sx={{mr: '10px'}}>Users</CustomButton>
                        <CustomButton>Sign up</CustomButton>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
