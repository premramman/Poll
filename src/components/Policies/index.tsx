import { Link, Stack, Typography } from "@mui/material";

function Policies() {
    return (
        <Stack direction="row" spacing={4}>
            <Link href="#">
                <Typography variant="caption">Privacy Policy</Typography>
            </Link>
            <Link href="#">
                <Typography variant="caption">Terms and Conditions</Typography>
            </Link>
        </Stack>
    )
}

export default Policies;