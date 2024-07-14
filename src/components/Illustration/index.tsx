import { Container, Link, Typography } from "@mui/material";
import ILLUSTRATIONS from "../../data/constants/illustrations";
import { illustrationContainer } from "./styles";
import "./index.css";

interface Props {
    type: string;
}

function Illustration({ type }: Props) {
    const IMAGE = ILLUSTRATIONS[type.toUpperCase()];

    return (
        <Container sx={illustrationContainer}>
            <img className="img-illustration" src={IMAGE.SRC} />
            <Link href={IMAGE.ATTRIBUTION_LINK} underline="none" target="_blank">
                <Typography variant="caption">{IMAGE.ATTRIBUTION_TEXT}</Typography>
            </Link>
        </ Container>
    )
}

export default Illustration;