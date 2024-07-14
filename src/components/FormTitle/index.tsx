import { Box, Typography } from "@mui/material";
import { formTitleBox } from "./styles";

interface Props {
    title: string,
    subTitle?: string
}

function FormTitle({ title, subTitle }: Props) {
    return (
        <Box sx={formTitleBox}>
            <Typography variant="h4">{title}</Typography>
            {subTitle &&
                <Typography>{subTitle}</Typography>
            }
        </Box>
    )
}

export default FormTitle;