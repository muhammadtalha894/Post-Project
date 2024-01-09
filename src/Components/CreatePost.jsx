import { useRef } from "react";
import PostListContext from "../Store/PostList_Store";
import { useContext } from "react";

function CreatePost() {
  const { HandleAdd } = useContext(PostListContext);
  const idElement = useRef();
  const titleElement = useRef();
  const postElement = useRef();
  const hashtagElement = useRef();
  const reactionElement = useRef();

  function formElementsvalue(event) {
    event.prevantDefualt;
    let id = idElement.current.value;
    let title = titleElement.current.value;
    let post = postElement.current.value;
    let hashtag = hashtagElement.current.value;
    let reaction = reactionElement.current.value;

    idElement.current.value = "";
    titleElement.current.value = "";
    postElement.current.value = "";
    hashtagElement.current.value = "";
    reactionElement.current.value = "";

    HandleAdd(id, title, post, hashtag, reaction);
  }

  return (
    <>
      <form action="" onSubmit={formElementsvalue}>
        <div className="mb-3 post">
          <label htmlFor="UserId" className="form-label">
            User Id
          </label>
          <input
            ref={idElement}
            type="text"
            className="form-control"
            id="UserId"
            placeholder="What You Wanna Post Enter Your Title Here"
          />
        </div>
        <div className="mb-3 post">
          <label htmlFor="Post Title" className="form-label">
            Post Title
          </label>
          <input
            ref={titleElement}
            type="text"
            className="form-control"
            id="Post Title"
            placeholder="What You Wanna Post Enter Your Title Here"
          />
        </div>
        <div className="mb-3 post">
          <label htmlFor="PostBody" className="form-label">
            Post
          </label>
          <textarea
            ref={postElement}
            className="form-control"
            id="PostBody"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3 post">
          <label htmlFor="Hashtags" className="form-label">
            #Hashtags
          </label>
          <input
            ref={hashtagElement}
            type="text"
            className="form-control"
            id="Hashtags"
            placeholder="What You Wanna Post Enter Your Title Here"
          />
        </div>
        <div className="mb-3 post">
          <label htmlFor="Reaction" className="form-label">
            Post Reactions
          </label>
          <input
            ref={reactionElement}
            type="text"
            className="form-control"
            id="Reaction"
            placeholder="What You Wanna Post Enter Your Title Here"
          />
          <button className="btn btn-primary">Post</button>
        </div>
      </form>
    </>
  );
}

export default CreatePost;
