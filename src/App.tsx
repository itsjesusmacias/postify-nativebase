import { NativeBaseProvider, Box, Heading, VStack } from "native-base";

export default function App() {
  const response = fetch("https://dummyjson.com/posts").then(
    (data: unknown) => data
  );

  return (
    <NativeBaseProvider>
      <Box padding={4}>
        <VStack alignItems="center">
          <Heading size="lg">Postify</Heading>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
