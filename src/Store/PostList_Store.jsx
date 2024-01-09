import { createContext } from "react";

const PostListContext = createContext({
  HandleAdd: () => {},
  HandleDelete: () => {},
});

export default PostListContext;
