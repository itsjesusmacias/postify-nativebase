// components
import { Center, Heading } from "native-base";
import { PostSkeleton, NoResults, ListOfPosts } from "../components/";

// constants
import { POST_LIMIT } from "../constants";

// hooks
import { usePosts } from "../hooks";

const PostView = () => {
  const { isLoading, noResults, posts, fetchPosts } = usePosts();

  // TODO Se puede sacar a componente
  if (isLoading)
    return (
      <>
        <Heading size="lg">Postify 🗳</Heading>
        <Center w="100%" mt="12" minH="80">
          {Array.from(Array(POST_LIMIT).keys()).map((index) => (
            <PostSkeleton key={index} />
          ))}
        </Center>
      </>
    );

  // TODO gestionar mejor el Heading
  if (noResults)
    return (
      <>
        <Heading size="lg">Postify 🗳</Heading>
        <NoResults onRetry={fetchPosts} />
      </>
    );

  return (
    <>
      <Heading size="lg">Postify 🗳</Heading>
      <ListOfPosts posts={posts} />
    </>
  );
};

export { PostView };
