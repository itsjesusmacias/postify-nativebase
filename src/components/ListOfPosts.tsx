// components
import { Box } from "native-base";
import { Post } from "./";

// hooks
import { useFavPosts } from "../hooks";

// types
import { Posts } from "../types";

// TODO debatir la necesidad de useFavPosts
const ListOfPosts = ({ posts }: { posts: Posts }) => {
  const { localPosts, toggleFavPost } = useFavPosts({ posts });

  return (
    <Box>
      {localPosts?.map(({ id, body, reactions, tags, title, like }) => (
        <Box minW="full" key={id} alignItems="center">
          <Post
            body={body}
            reactions={reactions}
            tags={tags}
            title={title}
            like={like}
            toggleFavPost={toggleFavPost(id)}
          />
        </Box>
      ))}
    </Box>
  );
};

export { ListOfPosts };
