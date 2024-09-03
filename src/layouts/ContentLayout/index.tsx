import { ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
    children?: ReactNode
}

function ContentLayout({ children }: Props) {
    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1 }}></Box>
            <Box sx={{ flex: 2 }}>
                <main>{children}</main>
            </Box>
            <Box sx={{ flex: 1 }}></Box>
        </Box>
    )
}

export default ContentLayout;