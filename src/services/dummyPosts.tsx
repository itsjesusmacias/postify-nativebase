const API = {
  GET_POSTS: "https://dummyjson.com/posts",
};

const getPosts = async () => await fetch(API.GET_POSTS);

export { getPosts };
