import { useState } from "react";
import { Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Link, Typography } from "@mui/material";
import { formatNum } from "../../../../utils";
import { getLongDate } from "../../../../utils/date";
import { PostModel } from "../../../../types/post";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../services";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import UserAvatar from "../../../../components/UserAvatar";
import Likes from "../../../../components/Likes";
import ActionMenu from "./ActionMenu";

interface Props {
    data?: PostModel;
}

function Post({ data }: Props) {
    const getPostFromUrl = () => {
        try {
            const params = useParams();
            const postId = Number(params.postId);
            const { data: result } = useGetPostQuery(postId);
            return result?.data;
        } catch (e) {
            console.error(e);
        }
    };

    if (!data) {
        data = getPostFromUrl();
    }

    const [showComments, setShowComments] = useState(false);
    const handleShowComments = () => setShowComments(!showComments);

    const handleOpenFullScreen = () => { };
    const handleEdit = () => { };
    const handleBookmark = () => { };
    const handleCopyLink = () => { };
    const handleReport = () => { };

    const avatar = <UserAvatar username={data?.username} size="medium" />;

    const title = (
        <div>
            <Typography variant="cardTitle" color="primary" >
                {data?.username}
            </Typography>
        </div>
    );

    const subHeader = (
        <div>
            <Typography variant="cardSubTitle" color="text.secondary">
                {data?.createdAt && getLongDate(new Date(data.createdAt))}
            </Typography>
        </div>
    );

    const actions = <ActionMenu
        onOpenFullScreen={handleOpenFullScreen}
        onEdit={handleEdit}
        onCopyLink={handleCopyLink}
        onBookmark={handleBookmark}
        onReport={handleReport}
    />;

    return (<>
        {data &&
            <Card sx={{ p: "1rem", borderRadius: 0, boxShadow: "none" }}>

                <CardHeader sx={{ paddingBottom: 0 }}
                    avatar={avatar}
                    title={title}
                    subheader={subHeader}
                    action={actions}
                />

                <CardContent>
                    <Typography variant="content">{data.content}</Typography>
                </CardContent>

                <CardActions disableSpacing sx={{ p: 0, pl: "1.1rem", pr: "1.1rem" }}>
                    <IconButton aria-label="view count" sx={{ backgroundColor: "transparent", marginLeft: "-8px" }} onClick={handleShowComments}>
                        <ModeCommentOutlinedIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="caption" color="text.secondary" sx={{ mr: "1rem" }}>{formatNum(data.comments)}</Typography>
                    <Link component="button" variant="caption" onClick={() => { }} sx={{ mr: "auto", color: "text.secondary", textDecoration: "none" }}>
                        Reply
                    </Link>

                    <Likes data={data} onLike={() => { }} onDislike={() => { }} />
                </CardActions>

                <Collapse in={showComments} timeout="auto" unmountOnExit>
                    <CardContent>
                        {/* TODO: Comment Component*/}
                    </CardContent>
                </Collapse>

            </Card>
        }
    </>);
}

export default Post;