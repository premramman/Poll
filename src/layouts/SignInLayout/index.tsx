import { Box, Stack } from "@mui/material";
import { formBox, pageContainer, illustrationBox, formInnerBox, formContainer, policiesBox } from "./styles";
import Footer from "../../components/Footer";
import Policies from "../../components/Policies";
import { ReactNode } from "react";

interface Props {
    illustration?: ReactNode,
    children?: ReactNode
}

function SignInLayout({ illustration, children }: Props) {
    return (
        <Box sx={pageContainer} >
            <Box sx={formContainer}>

                <Stack direction="row">
                    <Box sx={formBox}>
                        {illustration &&
                            <Box sx={illustrationBox}>
                                {illustration}
                            </Box>
                        }
                        <Box sx={formInnerBox}>
                            {children}
                        </Box>
                    </Box>
                </Stack>

                <Box sx={policiesBox}>
                    <Policies />
                </Box>

            </Box>
            <Footer />
        </Box>
    )
}

export default SignInLayout;