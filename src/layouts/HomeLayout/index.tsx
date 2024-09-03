import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { ReactNode } from "react";
import { footerBox, pageContainer } from "./styles";

interface Props {
    children?: ReactNode
}

function HomeLayout({ children }: Props) {
    return (

        <Box sx={pageContainer}>
            <NavBar />
            <Box>
                {children}
            </Box>
            <Box sx={footerBox}>
                <Footer />
            </Box>
        </Box>
    )
}

export default HomeLayout;