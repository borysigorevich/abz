import React, {useContext, useEffect, useState} from 'react';
import {CustomInput, formBoxStyles} from "../Form.styles";
import {Box} from "@mui/material";
import {AppContext} from "../../../context/context";
import {setEmail, setName, setPhone, setValidation} from "../../../context/actioinsCreators";

const Inputs = () => {
    const {state, dispatch} = useContext(AppContext)
    const [beforeFocus, setBeforeFocus] = useState({name: true, email: true, phone: true})
    const handleBlur = label => {
        if (beforeFocus[label]) setBeforeFocus({...beforeFocus, [label]: false})
    }

    const nameRegex = /[A-Za-z]{2,30}\s[A-Za-z]{2,30}/g.test(state.name)
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(state.email)
    const phoneRegex = /^\+380\d{9}$/g.test(state.phone)

    useEffect(() => {
        dispatch(setValidation('name', nameRegex))
        dispatch(setValidation('email', emailRegex))
        dispatch(setValidation('phone', phoneRegex))
    }, [nameRegex, emailRegex, phoneRegex, dispatch])

    return (
        <Box sx={formBoxStyles}>
            <CustomInput
                onBlur={() => handleBlur('name')}
                label={'Your name'}
                helperText={state.name && !nameRegex
                    ? 'Invalid'
                    : state.name && nameRegex
                        ? 'Name'
                        : !state.name && beforeFocus.name
                            ? 'Name'
                            : 'Required'}
                value={state.name}
                onChange={e => dispatch(setName(e.target.value))}
                error={(!beforeFocus.name && !state.name) || (!!state.name && !nameRegex)}
            />
            <CustomInput
                onBlur={() => handleBlur('email')}
                label={'Email'}
                helperText={state.email && !emailRegex
                    ? 'Invalid'
                    : state.email && emailRegex
                        ? 'Email'
                        : !state.email && beforeFocus.email
                            ? 'Email'
                            : 'Required'
                }
                value={state.email}
                onChange={e => dispatch(setEmail(e.target.value))}
                error={(!beforeFocus.email && !state.email) || (!!state.email && !emailRegex)}
            />
            <CustomInput
                onBlur={() => handleBlur('phone')}
                label={'Phone'}
                helperText={state.phone && !phoneRegex
                    ? 'Invalid'
                    : state.phone && phoneRegex
                        ? 'Phone'
                        : !state.phone && beforeFocus.phone
                            ? 'Phone'
                            : 'Required'
                }
                value={state.phone}
                onChange={e => dispatch(setPhone(e.target.value))}
                error={(!beforeFocus.phone && !state.phone) || (!!state.phone && !phoneRegex)}
            />
        </Box>
    );
};

export default Inputs;
