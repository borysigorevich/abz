import React from 'react';
import {Avatar, Box} from '@mui/material'
import {UserPaper, userPaperStyles} from "./User.styles";
import CustomTooltip from "./customTooltip/CustomTooltip";

const User = ({photo, name, position, email, phone}) => {
    return (
        <UserPaper sx={userPaperStyles}>
            <Avatar alt={'user'} src={photo} className={'avatar'}/>
            <CustomTooltip data={name} className={'name'}/>
            <Box className={'box'}>
                <CustomTooltip data={position}/>
                <CustomTooltip data={email}/>
                <CustomTooltip data={phone}/>
            </Box>
        </UserPaper>
    );
};

export default User;
