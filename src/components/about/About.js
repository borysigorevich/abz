import React from 'react';
import {Typography, Box} from '@mui/material'
import {Container, CustomButton, CustomTypographyH1} from "../../customComponents";
import {boxStyle, containerStyle, darkBackgroundStyle, h1Style, pStyle} from "./About.styles";

const About = () => {
    return (
        <Container sx={containerStyle}>
            <Box sx={darkBackgroundStyle}/>
            <Box sx={boxStyle}>
                <CustomTypographyH1 white={'white'} sx={h1Style}>
                    Test assignment for front-end developer
                </CustomTypographyH1>
                <Typography variant={'body1'} sx={pStyle}>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a
                    vast
                    understanding of User design thinking as they'll be building web interfaces with accessibility in
                    mind.
                    They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </Typography>
                <CustomButton>Sign up</CustomButton>
            </Box>
        </Container>
    );
};

export default About;
