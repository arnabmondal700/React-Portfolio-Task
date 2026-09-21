import { Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, imageSrc, url }) => (
  <VStack
    spacing={4}
    alignItems="flex-start"
    textAlign="left"
    backgroundColor="white"
    color="#1A202C"
    borderRadius="xl"
    overflow="hidden"
    boxShadow="lg"
    height="100%"
    transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    _hover={{ transform: 'translateY(-4px)', boxShadow: '2xl' }}
  >
    <Image src={imageSrc} alt={title} w="100%" h="180px" objectFit="cover" />

    <VStack spacing={3} alignItems="flex-start" p={5} pt={0} flex={1}>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600" flex={1}>
        {description}
      </Text>
      <Link
        href={url}
        isExternal
        fontWeight="semibold"
        color="teal.600"
        _hover={{ textDecoration: 'underline', color: 'teal.500' }}
      >
        <HStack spacing={2}>
          <Text as="span">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Link>
    </VStack>
  </VStack>
)

export default Card;