import HomeLayout from "../../layouts/HomeLayout";
import ContentLayout from "../../layouts/ContentLayout";
import PostList from "../../features/post/component/PostList";

function Home() {
    return (
        <HomeLayout>
            <ContentLayout>
                <PostList />
            </ContentLayout>
        </HomeLayout>
    )
}

export default Home;