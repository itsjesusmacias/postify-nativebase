// components
import { Center, Button, Heading } from "native-base";

// types
interface IProps {
  onRetry: () => void;
}

const NoResults = ({ onRetry }: IProps) => (
  <Center w="100%" mt="24">
    <Heading size="2xl" mb="8">
      No posts found
    </Heading>
    <Button bg="purple.300" _text={{ color: "white" }} onPress={onRetry}>
      try again
    </Button>
  </Center>
);

export { NoResults };
