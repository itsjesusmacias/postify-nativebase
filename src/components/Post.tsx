// components
import { Box, Badge, Stack, Heading, Text, HStack } from "native-base";
import { PostDetails } from "./";

// hooks
import { useModal } from "../hooks";

// types
interface IProps {
  body: string;
  reactions: number;
  title: string;
  toggleFavPost: () => void;
  like: boolean;
  tags: string[];
}

const Post = ({
  body,
  reactions,
  tags,
  title,
  like,
  toggleFavPost,
}: IProps) => {
  const { showModal, openModal, closeModal } = useModal();

  return (
    <Box
      onClick={openModal}
      minW="full"
      rounded="lg"
      my="4"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {title}
          </Heading>
          <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
            {tags.map((tag) => (
              <Badge key={tag} colorScheme="violet" mr="2">
                <Text>{tag}</Text>
              </Badge>
            ))}
          </Text>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <Text color="coolGray.600" fontWeight="400">
            Reactions: {reactions}
          </Text>
          {like && <Text>💜</Text>}
        </HStack>
      </Stack>
      <PostDetails
        toggleFavPost={toggleFavPost}
        showModal={showModal}
        closeModal={closeModal}
        body={body}
        reactions={reactions}
        like={like}
        title={title}
      />
    </Box>
  );
};

export { Post };
