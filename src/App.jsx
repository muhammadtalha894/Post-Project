import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/SideBar";
import PostList from "./Components/PostList";
import Nav from "./Components/Nav";
import CreatePost from "./Components/CreatePost";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useReducer, useState } from "react";
import PostListContext from "./Store/PostList_Store";

function reducer(currentstate, action) {
  let newarray = currentstate;
  if (action.type == "NEW_ADDITION") {
    newarray = [action.payload, ...currentstate];
    return newarray;
  } else if (action.type == "NEW_Delete") {
    let y = newarray.filter((id) => id.ID !== action.payload.newid);
    return y;
  }
}

function App() {
  const [postslist, dispatchposts] = useReducer(reducer, []);
  const [statepost, setstatepost] = useState("Home");

  function HandleAdd(id, title, post, hashtag, reaction) {
    let add = {
      type: "NEW_ADDITION",
      payload: {
        ID: Date.now(),
        Title: title,
        Body: post,
        Reactions: reaction,
        UserID: id,
        Hashtags: [hashtag],
      },
    };
    dispatchposts(add);
  }
  function HandleDelete(id) {
    let delet = {
      type: "NEW_Delete",
      payload: {
        newid: id,
      },
    };
    dispatchposts(delet);
  }
  return (
    <>
      <PostListContext.Provider
        value={{ postslist, HandleAdd, HandleDelete, setstatepost, statepost }}
      >
        <div className="FirstContainer">
          <Sidebar></Sidebar>
          <div className="SecondContainer">
            <Header></Header>
            {statepost == "Post" || statepost == "Create Post" ? null : (
              <Nav></Nav>
            )}
            {statepost == "Post" ? <PostList></PostList> : null}
            {statepost == "Create Post" ? <CreatePost></CreatePost> : null}
          </div>
        </div>
        <Footer></Footer>
      </PostListContext.Provider>
    </>
  );
}

export default App;
