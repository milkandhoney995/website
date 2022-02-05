import React from "react";
import "./App.scss";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.countReducer.count);
  const posts = useSelector((state) => state.postsReducer.posts);
  return (
    <div>
      <h1>hhhh</h1>
      <p>Count: {count}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// const mapState = (fgfg) => {
//   return { count: fgfg.count };
// };

// export default connect(mapState)(App);
export default App;
