import { VStack } from '@chakra-ui/react'


const FullScreenSection = ({
  children,
  isDarkBackground = false,
  ...boxProps
}) => (
  <VStack
    minHeight="100vh"
    w="100%"
    px={{ base: 6, md: 16 }}
    py={{ base: 16, md: 20 }}
    justifyContent="center"
    alignItems="center"
    backgroundColor={isDarkBackground ? '#1A202C' : '#F7FAFC'}
    color={isDarkBackground ? '#FFFFFF' : '#1A202C'}
    {...boxProps}
  >
    {children}
  </VStack>
)

export default FullScreenSection