import { MdDelete } from "react-icons/md";
import PostListContext from "../Store/PostList_Store";
import { useContext } from "react";
function Post({ posts }) {
  const { HandleDelete } = useContext(PostListContext);
  return (
    <>
      <div className="card posts" style={{ width: "30rem" }}>
        <span onClick={() => HandleDelete(posts.ID)}>
          <MdDelete />
        </span>
        <div className="card-body">
          <h5 className="card-title">{posts.Title}</h5>
          <p className="card-text">{posts.Body}</p>

          {posts.Hashtags.map((has) => (
            <span key={has} class="badge text-bg-primary">
              {has}
            </span>
          ))}

          <div className="alert alert-info react" role="alert">
            <span>Your Post Reacted By {posts.Reactions} People </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
