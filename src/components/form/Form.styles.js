import {styled} from "@mui/material/styles";
import {TextField, Radio, FormControlLabel, Box} from '@mui/material'

export const formContainerStyles = {
    textAlign: 'center',
    padding: '0 16px',
}

export const formH1Styles = {
    mt: '140px',
    mb: '50px',
}

export const formBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '23px',
    justifyContent: 'center',
    alignItems: 'center',
    mb: '25px',
}

const customInputStyles = (theme => ({
    [theme.breakpoints.up('md')]: {
        width: '380px',
    }
}))

export const CustomInput = styled(props => <TextField {...props} sx={customInputStyles} color={'secondary'}/>)`
  width: 328px;
`

export const formControlStyles = (theme => ({
    textAlign: 'start',
    width: '328px',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        width: '380px',
    }
}))

export const formLabelStyles = {
    mb: '11px',
}

const radioStyles = {
    padding: '0 11px 7px 7px',
}

export const FormRadio = styled(props => <Radio {...props} sx={radioStyles} color={'secondary'}/>)``

const customBoxStyles = (theme => ({
    [theme.breakpoints.up('md')]: {
        width: '312px',
    }
}))

export const CustomBox = styled(({isClicked, focus, resolution, format, isFileUpload, ...rest}) =>
    <Box {...rest} sx={customBoxStyles}>{rest.children}</Box>)`
  border: ${props => props.isClicked && props.focus
          ? !props.isFileUpload || !props.format || !props.resolution
                  ? '2px solid #CB3D40'
                  : '1px solid #D0CFCF'
          : '1px solid #D0CFCF'};
  border-radius: 0 4px 4px 0;
  border-left: none;
  background-color: transparent;
  width: 297px;
  height: 54px;
  color: ${props => props.isFileUpload ? '#000' : '#7E7E7E'};
  padding: 14px 21px;
  text-align: start;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`

const customFormatLabelStyles = (() => ({
    marginRight: 0,
}))

export const CustomFormControlLabel = styled(({isFileUpload, focus, isClicked, format, resolution, ...rest}) => (
    <FormControlLabel {...rest} sx={customFormatLabelStyles} label={'Upload'}/>))`
  padding: 14px 15px;
  color: rgba(0, 0, 0, 0.87);
  border: ${props => props.isClicked && props.focus
          ? !props.isFileUpload || !props.format || !props.resolution
                  ? '2px solid #CB3D40'
                  : '1px solid rgba(0, 0, 0, 0.87)'
          : '1px solid rgba(0, 0, 0, 0.87)'};
  border-radius: 4px 0 0 4px;
  width: 83px;
  height: 54px;

  position: relative;
  left: 11px;

  &::before {
    content: 'Required';
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 50px;
    font-family: 'Asap', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: ${props => props.isClicked && props.focus
            ? !props.format || !props.resolution || !props.isFileUpload
                    ? 'block'
                    : 'none'
            : 'none'};
    color: #CB3D40;
  }
`

export const fileInputBoxStyles = (theme => ({
    display: 'flex',
    alignItems: 'center',
    width: '328px',
    margin: '46px auto',
    [theme.breakpoints.up('md')]: {
        width: '380px'
    }
}))
