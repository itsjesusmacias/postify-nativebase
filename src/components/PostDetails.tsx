// components
import { Button, Modal, Text, Center, HStack } from "native-base";

// Types
interface IProps {
  showModal: boolean;
  closeModal: () => void;
  body: string;
  reactions: number;
  title: string;
  toggleFavPost: () => void;
  like: boolean;
}

const PostDetails = ({
  showModal,
  closeModal,
  body,
  reactions,
  title,
  toggleFavPost,
  like,
}: IProps) => (
  <Center>
    <Modal isOpen={showModal} onClose={closeModal}>
      <Modal.Content mt="24" mb="auto">
        <Modal.CloseButton />
        <Modal.Header maxW="90%">{title}</Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer justifyContent="space-between" alignItems="center">
          <Button
            onPress={toggleFavPost}
            bg="purple.300"
            _pressed={{ bg: "purple.400" }}
            _focus={{ bg: "purple.400" }}
          >
            {like ? "Dislike" : "Like"}
          </Button>
          <HStack space="4">
            {like && <Text>💜</Text>}
            <Text>Reactions: {reactions}</Text>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </Center>
);

export { PostDetails };
