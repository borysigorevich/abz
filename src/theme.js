import {createTheme} from '@mui/material/styles'

export let theme = createTheme({
    palette: {
        primary: {
            main: '#f4e041'
        },
        secondary: {
            main: '#00bdd3',
        },
        background: {
            default: '#f8f8f8',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 360,
            md: 768,
            lg: 1024,
            xl: 2560
        }
    },
    mixins: {
        toolbar: {
            minHeight: 60
        }
    },
    components: {}
})

theme = {
    ...theme,
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    '@media (min-width: 360px)': {
                        paddingLeft: '16px',
                        paddingRight: '16px'
                    },
                    [theme.breakpoints.up('md')]: {
                        paddingLeft: '32px',
                        paddingRight: '32px'
                    },
                    [theme.breakpoints.up('lg')]: {
                        paddingLeft: '60px',
                        paddingRight: '60px'
                    }
                }
            }
        },

    }
}