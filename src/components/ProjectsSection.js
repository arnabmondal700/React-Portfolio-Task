import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'
import Card from './Card'
import projects from '../data/projects'

const ProjectsSection = () => (
  <FullScreenSection
    id="projects-section"
    isDarkBackground
    alignItems="flex-start"
  >
    <VStack
      spacing={8}
      alignItems="flex-start"
      w="100%"
      maxWidth="1200px"
      mx="auto"
    >
      <VStack spacing={2} alignItems="flex-start">
        <Heading as="h2" size="xl">
          Highlighted Projects
        </Heading>
        <Text color="gray.300">
          A selection of the products I have shipped recently.
        </Text>
      </VStack>

      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </SimpleGrid>
    </VStack>
  </FullScreenSection>
)

export default ProjectsSection