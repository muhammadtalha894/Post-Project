import PostListContext from "../Store/PostList_Store";
import { useContext } from "react";
function Sidebar() {
  const { statepost, setstatepost } = useContext(PostListContext);
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
        style={{ width: "200px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">LUMAIN SIDE</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={() => setstatepost("Home")}>
            <a
              href="#"
              className={`nav-link ${statepost === "Home" && "active"}`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li onClick={() => setstatepost("Create Post")}>
            <a
              href="#"
              className={`nav-link ${statepost === "Create Post" && "active"}`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
          <li onClick={() => setstatepost("Post")}>
            <a
              href="#"
              className={`nav-link ${statepost === "Post" && "active"}`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Post
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}

export default Sidebar;
