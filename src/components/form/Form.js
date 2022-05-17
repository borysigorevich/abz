import React, {useContext} from 'react';
import {Container, CustomButton, CustomTypographyH1} from "../../customComponents";
import {
    formContainerStyles,
    formH1Styles,
} from "./Form.styles";
import Inputs from "./inputs/Inputs";
import Radio from "./radio/Radio";
import FileInput from "./fileInput/FileInput";
import {AppContext} from "../../context/context";
import {registerUser} from "./utils";

const Form = () => {
    const {
        state: {
            validation: {
                name: nameValid,
                email: emailValid,
                phone: phoneValid,
                file: fileValid
            },
            name,
            email,
            phone,
            file,
            position,
            token
        },
        dispatch
    } = useContext(AppContext)
    const formData = new FormData()
    formData.append('position_id', position)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('photo', file)

    return (
        <Container sx={formContainerStyles}>
            <CustomTypographyH1 sx={formH1Styles}>Working with POST request</CustomTypographyH1>
            <Inputs/>
            <Radio/>
            <FileInput/>
            <CustomButton onClick={() => registerUser(formData, token, dispatch)} disabled={!nameValid || !emailValid || !phoneValid || !fileValid} sx={{mb: '50px'}}>Sign
                up</CustomButton>
        </Container>
    );
};

export default Form;
