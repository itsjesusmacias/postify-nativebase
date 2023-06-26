// hooks
import { useState } from "react";
import { useToast } from "native-base";

// utils
import { orderPostByFav } from "../utils";

// types
import { Posts } from "../types";

interface IProps {
  posts: Posts;
}

interface IReturn {
  localPosts: Posts;
  toggleFavPost: (postId: number) => () => void;
}

const useFavPosts = ({ posts }: IProps): IReturn => {
  const toast = useToast();
  const [localPosts, setLocalPosts] = useState(posts);

  const toggleFavPost: IReturn["toggleFavPost"] = (postId) => () => {
    const changedPosts = localPosts.map(({ id, like, ...args }) => ({
      ...args,
      id,
      like: id === postId ? !like : like,
    }));

    setLocalPosts(orderPostByFav(changedPosts));

    toast.show({
      placement: "top",
      description: `There are new changes in the post with id ${postId}`,
    });
  };

  return { localPosts, toggleFavPost };
};

export { useFavPosts };
