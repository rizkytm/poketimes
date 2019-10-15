const initState = {
  posts: [
    { id: "1", title: "Ini adalah Judul", body: "Lorem ipsum 1" },
    { id: "2", title: "Ini juga Judul", body: "Lorem ipsum 2" },
    { id: "3", title: "Ini Judul lagi", body: "Lorem ipsum 3" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
