import { Typography } from "@mui/material";
import GLOBALS from "../../data/constants/globals";
import { getCurrentYear } from "../../utils/date";

function Copyright() {
    const year = getCurrentYear();
    const copyrightText = `Copyright © ${year} ${GLOBALS.APP.COPYRIGHT_AUTHOR}. All Rights Reserved`;

    return (
        <Typography variant="caption" color="text.secondary">{copyrightText}</Typography>
    )
}

export default Copyright;