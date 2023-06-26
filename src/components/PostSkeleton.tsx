// components
import { VStack, Skeleton } from "native-base";

// TODO arreglar warning key

const PostSkeleton = () => (
  <VStack
    w="90%"
    my="8"
    maxW="400"
    borderWidth="1"
    space={8}
    overflow="hidden"
    rounded="md"
    _light={{
      borderColor: "coolGray.300",
    }}
  >
    <Skeleton h="6" startColor="purple.100" />
    <Skeleton.Text px="4" />
    <Skeleton rounded="md" />
  </VStack>
);

export { PostSkeleton };
