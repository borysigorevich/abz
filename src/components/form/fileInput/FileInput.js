import React, {useContext, useEffect, useRef, useState} from 'react';
import {CustomBox, CustomFormControlLabel, fileInputBoxStyles} from "../Form.styles";
import {Box} from "@mui/material";
import {AppContext} from "../../../context/context";
import {handleFocus, InputComponent} from "../inputs/utils";
import {setValidation} from "../../../context/actioinsCreators";

const FileInput = () => {
    const {dispatch, state} = useContext(AppContext)
    const [isClicked, setIsClicked] = useState(false)
    const [focus, setFocus] = useState(false)
    const [{height, width}, setResolution] = useState({height: 0, width: 0})
    const [isValidFormat, setIsValidFormat] = useState(false)
    const focusRef = useRef(false)
    const handlerRef = useRef(false)
    const editedFileName = state.file?.name?.length > 23 ? state.file.name.substring(0, 21) + '...' : state.file?.name

    const validResolution = width > 0 && width <= 75 && height > 0 && height <= 75

    const handleFocusWrapper = () => {
        handleFocus(focusRef, setFocus, handleFocusWrapper)
    }

    if (!handlerRef.current) {
        handlerRef.current = true
        window.addEventListener('focus', handleFocusWrapper)
    }

    useEffect(() => {
        dispatch(setValidation('file', isValidFormat && validResolution))
    }, [isValidFormat, validResolution])

    return (
        <Box sx={fileInputBoxStyles}>
            <CustomFormControlLabel
                control={
                    <InputComponent
                        setIsValidFormat={setIsValidFormat}
                        dispatch={dispatch}
                        setIsClicked={setIsClicked}
                        setResolution={setResolution}/>}
                isClicked={isClicked}
                focus={focus}
                resolution={validResolution}
                format={isValidFormat}
                isFileUpload={state.file}
            />
            <CustomBox
                isClicked={isClicked}
                focus={focus}
                resolution={validResolution}
                format={isValidFormat}
                isFileUpload={state.file}>{state.file ? editedFileName : 'Upload your photo'}</CustomBox>
        </Box>
    );
};

export default FileInput;
