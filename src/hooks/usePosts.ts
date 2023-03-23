// hooks
import { usePromise } from "./usePromise";

// services
import { getPosts } from "../services/dummyPosts";

// utils
import { deserializerPosts } from "../utils/";

// types
import { Posts } from "../types";

interface IReturn {
  isLoading: boolean;
  noResults: boolean;
  posts: Posts;
  fetchPosts: () => void;
}

const usePosts = (): IReturn => {
  const {
    result,
    isLoading,
    triggerPromise: fetchPosts,
  } = usePromise(getPosts, {
    triggerPromiseOnMount: true,
    deserializerFn: deserializerPosts,
  });

  const posts = result || [];

  const noResults = posts?.length === 0;

  // TODO Si quereis ver el skeleton podeis forzar el isLoading
  return {
    isLoading,
    noResults,
    posts,
    fetchPosts,
  };
};

export { usePosts };
