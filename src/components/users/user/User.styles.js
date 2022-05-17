import {Paper} from '@mui/material'
import {styled} from '@mui/material/styles'

export const UserPaper = styled(props => <Paper {...props} elevation={0}/>)`
  width: 370px;
  height: 254px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  .avatar {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }
  
  .name {
    margin-bottom: 20px;
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`

export const userPaperStyles = (theme => ({
    [theme.breakpoints.up('xs')]: {
        width: '328px',
    },
    [theme.breakpoints.up('md')]: {
        width: '344px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '282px'
    },
    [theme.breakpoints.up('xl')]: {
        width: '370px'
    },
}))