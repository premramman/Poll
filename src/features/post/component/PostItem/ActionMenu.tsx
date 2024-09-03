import { useState, MouseEvent } from "react";
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import EditOutlined from '@mui/icons-material/EditOutlined';
import FlagOutlined from '@mui/icons-material/FlagOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';

interface Props {
    onOpenFullScreen: () => void,
    onEdit: () => void,
    onCopyLink: () => void,
    onBookmark: () => void,
    onReport: () => void
}

function PostActionMenu({ onOpenFullScreen, onEdit, onCopyLink, onBookmark, onReport }: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const openMenu = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    const handleOpenFullScreen = () => {
        onOpenFullScreen();
        closeMenu();
    }

    const handleEdit = () => {
        onEdit();
        closeMenu();
    }

    const handleCopyLink = () => {
        onCopyLink();
        closeMenu();
    }

    const handleBookmark = () => {
        onBookmark();
        closeMenu();
    }

    const handleReport = () => {
        onReport();
        closeMenu();
    }

    return (<>
        <IconButton
            aria-label="post menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={openMenu}
        >
            <MoreVertIcon />
        </IconButton>

        <Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
            <MenuItem onClick={handleOpenFullScreen}>
                <ListItemIcon>
                    <OpenInFullOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body2">Open</Typography>
                </ListItemText>
            </MenuItem>

            <MenuItem onClick={handleEdit}>
                <ListItemIcon>
                    <EditOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body2">Edit</Typography>
                </ListItemText>
            </MenuItem>

            <MenuItem onClick={handleCopyLink}>
                <ListItemIcon>
                    <ShareOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body2">Copy Link</Typography>
                </ListItemText>
            </MenuItem>

            <MenuItem onClick={handleBookmark}>
                <ListItemIcon>
                    <BookmarkBorder fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body2">Bookmark</Typography>
                </ListItemText>
            </MenuItem>

            <MenuItem onClick={handleReport}>
                <ListItemIcon>
                    <FlagOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body2">Report</Typography>
                </ListItemText>
            </MenuItem>
        </Menu>
    </>);
}

export default PostActionMenu;