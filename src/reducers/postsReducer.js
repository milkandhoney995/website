export default function postsReducer(
  state = {
    posts: [
      {
        id: 1,
        title: "Reduxについて",
      },
      {
        id: 2,
        title: "ReduxのHooksについて",
      },
    ],
  }
) {
  return state;
}
