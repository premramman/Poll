import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        cardTitle: React.CSSProperties;
        cardSubTitle: React.CSSProperties;
        content: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        cardTitle?: React.CSSProperties;
        cardSubTitle?: React.CSSProperties;
        content?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        cardTitle: true;
        cardSubTitle: true;
        content: true;
    }
}

const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none'
        },
        cardTitle: {
            fontFamily: 'IBM Plex Sans',
            fontSize: "0.86rem"
        },
        cardSubTitle: {
            fontFamily: "monospace",
            fontSize: "0.75rem"
        },
        content: {
            fontFamily: "Roboto",
            fontSize: "0.96rem",
            lineHeight: "1.6rem"
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
            },
            defaultProps: {
                variantMapping: {
                    content: "p"
                }
            }
        }
    }
});

export default theme;