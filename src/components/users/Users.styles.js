export const usersContainerStyles = (theme => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    flexDirection: 'column',
    px: '16px',
    [theme.breakpoints.up('xl')]: {
        width: '1170px',
        padding: 0,
    },
}))

export const usersBoxStyles = (theme => ({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
        gap: '16px'
    },
    [theme.breakpoints.up('lg')]: {
        gap: '29px'
    },
}))

export const h1Styles = {
    padding: '0 40px',
}