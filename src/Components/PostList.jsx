import Post from "./Post";
import PostListContext from "../Store/PostList_Store";
import { useContext } from "react";

function PostList() {
  const { postslist } = useContext(PostListContext);

  return (
    <>
      {postslist.map((posts) => (
        <Post key={posts.ID} posts={posts}></Post>
      ))}
    </>
  );
}

export default PostList;
