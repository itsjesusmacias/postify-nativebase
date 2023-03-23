// constants
import { POST_LIMIT, HTTP_STATUS } from "../constants/";

const API = {
  GET_POSTS: `https://dummyjson.com/posts?limit=${POST_LIMIT}`,
};

// services

const getPosts = async () => {
  const response = await fetch(API.GET_POSTS);
  const { status } = response;
  const data = await response.json();

  // TODO Gestionar error y lanzar toast
  if (status !== HTTP_STATUS.OK) return new Error(data.message);

  return data;
};

export { getPosts };
