import { Avatar, Typography } from "@mui/material";
import { stringToColor } from "../../utils";

interface Props {
    username?: string;
    size?: "small" | "default" | "medium" | "large"
}

function UserAvatar({ username, size = "default" }: Props) {
    const getSize = () => {
        if (size === "small") {
            return { width: 24, height: 24 }
        } else if (size === "medium") {
            return { width: 32, height: 32 }
        } else if (size === "large") {
            return { width: 48, height: 48 }
        }

        return null;
    };

    return (<>
        {username &&
            <Avatar aria-label="post" sx={{ bgcolor: stringToColor(username), ...getSize() }} >
                <Typography variant="body2" sx={{ lineHeight: "normal" }}>{username[0]}</Typography>
            </Avatar>
        }
    </>);
}

export default UserAvatar;