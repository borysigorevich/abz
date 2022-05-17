import image from '../../assets/pexels-alexandr-podvalny-1227513.jpeg'

export const containerStyle = ( theme => ({
    minHeight: '500px',
    textAlign: 'center',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '40px 16px 70px',
    position: 'relative',
    mb: '140px',
    [theme.breakpoints.up('md')]: {
        padding: '89px 16px 88px',
    },
    [theme.breakpoints.up('md')]: {
        padding: '164px 16px 163px',
    },
}))

export const darkBackgroundStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
}

export const boxStyle = {
    maxWidth: '380px',
    margin: '0 auto',
    position: 'relative',
}

export const h1Style = {
    mb: '21px',
    textAlign: 'center'
}

export const pStyle = {
    mb: '33px',
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '26px',
}