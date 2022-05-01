import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            dark: '#010137',
            main: '#377FFE',
            light: '#28B9F7',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#377FFE',
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 18,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 18,
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 18,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 18,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
                rounded: {
                    borderRadius: 18,
                },
            },
        },
    },
});

export default theme;
