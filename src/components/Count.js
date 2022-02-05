import React from "react";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";

// connect関数
// function Count({ count }) {
//   return <div>{count}</div>;
// }

// const map = (state) => {
//   return { count: state.count };
// };

function Count() {
  const count = useSelector((state) => state.count);
  const posts = useSelector((state) => state.posts);
  return (
    <>
      <div>Countコンポーネント:{count}</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
export default Count;
