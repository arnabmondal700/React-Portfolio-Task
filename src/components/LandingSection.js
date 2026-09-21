import { Avatar, Heading, Text, VStack } from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'

const greeting = 'Hello, I am Pete!'
const bio1 = 'A frontend developer'
const bio2 = 'specialized in React'

const LandingSection = () => (
  <FullScreenSection id="landing-section" isDarkBackground>
    <VStack spacing={6} alignItems="center" textAlign="center">
      <Avatar
        size="2xl"
        name="Pete"
        src="https://i.pravatar.cc/150?img=7"
      />
      <Heading as="h1" size="2xl">
        {greeting}
      </Heading>
      <VStack spacing={1}>
        <Text fontSize="xl">{bio1}</Text>
        <Text fontSize="xl">{bio2}</Text>
      </VStack>
    </VStack>
  </FullScreenSection>
)

export default LandingSection