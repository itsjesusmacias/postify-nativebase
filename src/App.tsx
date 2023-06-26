// pages
import { PostView } from "./pages";

// components
import { NativeBaseProvider, Box, VStack } from "native-base";

const App = () => (
  <NativeBaseProvider>
    <Box padding={4}>
      <VStack alignItems="center">
        <PostView />
      </VStack>
    </Box>
  </NativeBaseProvider>
);

export default App;
