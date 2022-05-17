import {styled} from '@mui/material/styles'
import {Box, Button, Typography} from '@mui/material'

export const Container = styled(Box)`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`

export const CustomButton = styled((props) => <Button {...props} variant={'contained'}>{props.children}</Button>)`
  border-radius: 80px;
  height: 34px;
  min-width: 100px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-transform: none;
  color: rgba(0, 0, 0, 0.87);

  &:hover {
    background: #FFE302;
  }

  &:disabled {
    background-color: #b4b4b4;
    color: rgba(255, 255, 255, 0.87);
  }
`

export const CustomTypographyH1 = styled(props => <Typography {...props} variant={'h1'}>{props.children}</Typography>)`
  color: ${props => props.white ? '#fff' : '#000'};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
`