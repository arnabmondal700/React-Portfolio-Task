import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'
import { useSubmit } from '../hooks/useSubmit'
import { useAlertContext } from '../context/AlertContext'

const validationSchema = Yup.object({
  firstName: Yup.string().required('Please enter your first name'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter your email address'),
  type: Yup.string()
    .oneOf(['hireMe', 'openSource', 'other'], 'Please select a valid option')
    .required('Please select a type of enquiry'),
  comment: Yup.string()
    .min(25, 'Please enter at least 25 characters')
    .required('Please enter your message'),
})

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    onSubmit: (values) => {
      submit('/api/contact', values)
    },
    validationSchema,
  })


  useEffect(() => {
    if (!response) {
      return
    }

    onOpen(response.type, response.message)

    if (response.type === 'success') {
      const timeoutId = window.setTimeout(() => {
        formik.resetForm()
      }, 0)

      return () => window.clearTimeout(timeoutId)
    }
  }, [response])

  return (
    <FullScreenSection
      id="contactme-section"
      isDarkBackground
      alignItems="flex-start"
    >
      <VStack
        spacing={8}
        alignItems="flex-start"
        w="100%"
        maxWidth="560px"
        mx="auto"
      >
        <VStack spacing={2} alignItems="flex-start">
          <Heading as="h2" size="xl">
            Contact me
          </Heading>
          <Text color="gray.300">
            Interested in working together? Fill in the form below and I will
            get back to you as soon as possible.
          </Text>
        </VStack>

        <Box w="100%">
          <form onSubmit={formik.handleSubmit} noValidate>
            <VStack spacing={4} alignItems="flex-start">
              <FormControl
                isInvalid={Boolean(
                  formik.touched.firstName && formik.errors.firstName
                )}
              >
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>
                  {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={Boolean(formik.touched.email && formik.errors.email)}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={Boolean(formik.touched.type && formik.errors.type)}
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps('type')}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source contribution
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={Boolean(
                  formik.touched.comment && formik.errors.comment
                )}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  rows={6}
                  placeholder="Tell me about your project (at least 25 characters)"
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                width="100%"
                mt={2}
                isLoading={isLoading}
                isDisabled={isLoading}
                loadingText="Submitting"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  )
}

export default ContactMeSection