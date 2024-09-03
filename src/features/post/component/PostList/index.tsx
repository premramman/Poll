import { useCallback, useEffect, useState } from "react";
import { useLazyGetPostsQuery } from "../../services";
import { PostModel } from "../../../../types/post";
import PostItem from "../PostItem";
import { Box } from "@mui/material";
import { Virtuoso } from 'react-virtuoso';

function PostList() {
    const pageSize = 20;
    const [getPosts] = useLazyGetPostsQuery();
    const [items, setItems] = useState([] as PostModel[]);
    const [hasMoreItems, setHasMoreItems] = useState(true);

    const loadMore = useCallback(async () => {
        if (hasMoreItems) {
            const { data: result } = await getPosts({ offset: items.length, limit: pageSize });

            if (result?.data) {
                const moreItems = (items.length + result.data.length) < result.total;

                if (hasMoreItems !== moreItems) {
                    setHasMoreItems(moreItems);
                }

                setItems((prev) => [...prev, ...result.data]);
            }
        }
    }, [setItems, items.length, pageSize]);

    useEffect(() => { loadMore() }, []);

    const renderItem = (index: number, data: PostModel) => (
        <Box key={data.id} sx={{ mb: 2, border: "1px solid #eee" }}>
            <PostItem data={data} />
        </ Box>
    )

    const Footer = () => {
        const loading = (
            <Box sx={{ mb: 2, border: "1px solid #eee" }}>
                Loading...
            </Box>
        )

        return hasMoreItems ? loading : <></>
    }

    return (
        <Virtuoso
            useWindowScroll
            data={items}
            endReached={loadMore}
            increaseViewportBy={200}
            itemContent={renderItem}
            components={{ Footer }}
        />
    )
}

export default PostList;