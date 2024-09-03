import { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { formatNum } from "../../utils";
import { PostModel } from "../../types/post";

interface Props {
    data: PostModel,
    onLike: () => void,
    onDislike: () => void
}

function Likes({ data, onLike, onDislike }: Props) {
    const [liked, setLiked] = useState(data.liked);
    const [disliked, setDisliked] = useState(data.disliked);

    const handleDislikeClick = () => {
        const val = !disliked;
        setDisliked(val);

        if (val && liked) {
            setLiked(false);
        }
    }

    const handleLikeClick = () => {
        const val = !liked;
        setLiked(val);

        if (val && disliked) {
            setDisliked(false);
        }
    }

    return (<>
        <IconButton aria-label="likes" onClick={handleLikeClick}>
            {liked && <ThumbUpAltIcon fontSize="small" color="action" />}
            {!liked && <ThumbUpOffAltIcon fontSize="small" />}
        </IconButton>
        <Typography variant="caption" color="text.secondary" sx={{ mr: "1rem" }}>{formatNum(data.likes)}</Typography>

        <IconButton aria-label="dislikes" onClick={handleDislikeClick}>
            {disliked && <ThumbDownAltIcon fontSize="small" color="action" />}
            {!disliked && <ThumbDownOffAltIcon fontSize="small" />}
        </IconButton>
        <Typography variant="caption" color="text.secondary">{formatNum(data.dislikes)}</Typography>
    </>);
}

export default Likes;