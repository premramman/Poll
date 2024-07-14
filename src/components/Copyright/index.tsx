import { Typography } from "@mui/material";
import { format } from "date-fns";
import GLOBALS from "../../data/constants/globals";

function Copyright() {
    const year = format(new Date(), "yyyy");
    const copyrightText = `Copyright © ${year} ${GLOBALS.APP.COPYRIGHT_AUTHOR}. All Rights Reserved`;

    return (
        <Typography variant="caption">{copyrightText}</Typography>
    )
}

export default Copyright;