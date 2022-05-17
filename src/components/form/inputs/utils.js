import {setFile} from "../../../context/actioinsCreators";
import {Input} from "@mui/material";

const formatRegex = /\.jpeg|\.jpg/g

export const handleFocus = (focusRef, setFocus, handleFocusWrapper) => {
    if (!focusRef.current) {
        setTimeout(() => {
            focusRef.current = true
            setFocus(true)
        }, 300)
    }
    window.removeEventListener('focus', handleFocusWrapper)
}

export const InputComponent = ({dispatch, setIsClicked, setResolution, setIsValidFormat}) => {
    return <Input
        onClick={() => {
            setIsClicked(true)
        }}
        onChange={e => {
            const file = e.target.files[0]
            const img = new Image()
            img.src = URL.createObjectURL(file)
            setIsValidFormat(formatRegex.test(file.name))
            img.onload = function () {
                setResolution({width: img.naturalWidth, height: img.naturalHeight})
            }
            dispatch(setFile(file))
        }}
        accept={'.jpg, .jpeg'}
        type={'file'}
        sx={{opacity: '0'}}/>
}