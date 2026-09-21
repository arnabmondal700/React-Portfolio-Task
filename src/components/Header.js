import { useEffect, useRef } from 'react'
import { Box, HStack, Link } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import socials from '../data/socials'

const Header = () => {

  const headerRef = useRef(null)

  useEffect(() => {
    let prevScrollPos = window.scrollY

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const headerElement = headerRef.current

      if (!headerElement) {
        return
      }

      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = 'translateY(0)'
      } else {
        headerElement.style.transform = 'translateY(-200px)'
      }

      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = (anchor) => (event) => {
    event.preventDefault()
    const id = `${anchor}-section`
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={10}>
      <Box
        ref={headerRef}
        transition="transform 0.3s ease-in-out"
        backgroundColor="#2A4365"
        color="white"
        px={{ base: 4, md: 8 }}
        py={4}
        boxShadow="md"
      >
        <HStack
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          maxWidth="1200px"
          mx="auto"
        >
          <HStack spacing={5} as="nav" aria-label="Social media links">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                isExternal
                aria-label={social.name}
                color="white"
                transition="color 0.2s ease-in-out"
                _hover={{ color: 'teal.200' }}
                _focusVisible={{ outline: '2px solid', outlineColor: 'teal.200' }}
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </Link>
            ))}
          </HStack>

          <HStack spacing={8} as="nav" aria-label="Page sections">
            <Link
              href="/#projects-section"
              onClick={handleClick('projects')}
              color="white"
              fontWeight="semibold"
              transition="color 0.2s ease-in-out"
              _hover={{ color: 'teal.200' }}
            >
              Projects
            </Link>
            <Link
              href="/#contactme-section"
              onClick={handleClick('contactme')}
              color="white"
              fontWeight="semibold"
              transition="color 0.2s ease-in-out"
              _hover={{ color: 'teal.200' }}
            >
              Contact Me
            </Link>
          </HStack>
        </HStack>
      </Box>
    </Box>
  )
}

export default Header