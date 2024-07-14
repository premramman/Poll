import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 28
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 400
                }
            }
        }
    }
});

export default theme;