import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            dark: '#570000',
            main: '#B10F2E',
            light: '#E9AFA3',
            contrastText: '#FDFFFF',
        },
        secondary: {
            main: '#E4C5AF',
            contrastText: '#121212',
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
