import { Box } from "@mui/material";
import { fieldBox } from "./styles";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

function RelatedFieldLayout({ children }: Props) {
    return (
        <Box sx={fieldBox}>
            {children}
        </Box>
    )
}

export default RelatedFieldLayout;