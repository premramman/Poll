import { Box } from "@mui/material";
import { ReactNode } from "react";
import { formBox } from "./styles";

interface Props {
    children?: ReactNode
}

function FormLayout({children}: Props) {
    return (
        <Box sx={formBox}>{children}</Box>
    )
}

export default FormLayout;