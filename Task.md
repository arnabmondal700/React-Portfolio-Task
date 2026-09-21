Build a complete single-page Portfolio Web Application in React based on the Meta Advanced React peer-graded assignment specifications. Ensure all functionality, accessibility, and smooth UI transitions strictly fulfill the grading rubric.

## Tech Stack & Dependencies
- **Core Framework:** React (Hooks: `useState`, `useEffect`, `useRef`, `useContext`)
- **UI & Styling:** Chakra UI (`@chakra-ui/react`, `@emotion/react`, `@emotion/styled`, `framer-motion`)
- **Form & Validation:** Formik & Yup
- **Icons:** FontAwesome (`@fortawesome/react-fontawesome`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons`)

---

## 1. Context & Custom Hooks
- **`AlertContext.js`:** 
  - Provide global alert state (`isOpen`, `type` ['success' | 'error'], `message`).
  - Expose `onOpen(type, message)` and `onClose()` methods via a custom hook `useAlertContext()`.
- **`useSubmit.js`:**
  - Custom hook simulating an asynchronous API call (using `setTimeout`).
  - Expose `isLoading` (boolean), `response` (`{ type: 'success' | 'error', message: string }`), and `submit(url, data)`.
  - Simulate random or conditional success/error responses to demonstrate form handling.

---

## 2. Header Component (`Header.js`)
- **External Social Links (Left Side):**
  - Render links from a `socials` array (GitHub, LinkedIn, Medium, Stack Overflow, etc.).
  - Wrap in a Chakra UI `HStack` with appropriate spacing.
  - Display each link with `<FontAwesomeIcon icon={social.icon} size="2x" />`.
- **Internal Navigation Links (Right Side):**
  - Links for "Projects" (`/#projects-section`) and "Contact Me" (`/#contactme-section`).
  - Attach an `onClick` handler (`handleClick(anchor)`) implementing smooth scrolling to `#projects-section` or `#contactme-section`.
- **Scroll-Direction Header Visibility:**
  - Track vertical scroll position using `useEffect` and `useRef`.
  - Hide header (`transform: translateY(-200px)`) when scrolling down.
  - Show header (`transform: translateY(0)`) when scrolling up.
  - Apply smooth CSS transitions (`transition="transform 0.3s ease-in-out"`).

---

## 3. Landing Section Component (`LandingSection.js`)
- Full-height viewport layout centered vertically and horizontally using Chakra `VStack` / `FullScreenSection`.
- Display avatar image: `https://i.pravatar.cc/150?img=7` via Chakra `<Avatar>`.
- Display greeting: `"Hello, I am Pete!"`.
- Display bio lines: `"A frontend developer"` and `"specialized in React"`.

---

## 4. Projects Section & Card Component (`ProjectsSection.js` & `Card.js`)
- **Grid Layout:** Render projects in a responsive **2x2 grid** using Chakra UI `<SimpleGrid columns={2} spacing={8}>` or `<Box display="grid">`.
- **`Card.js` Widget:**
  - Outer container: `VStack` with rounded corners (`borderRadius="xl"`), background color, and left alignment.
  - Render project image (`Image`), project title (`Heading`), and description (`Text`).
  - Render a clickable "See more" text with `<FontAwesomeIcon icon={faArrowRight} size="1x" />` aligned inside an `HStack`.

---

## 5. Contact Me Section Component (`ContactMeSection.js`)
- **Form Fields & Formik Integration:**
  - Fields: `firstName` (text), `email` (email), `type` (select dropdown), `comment` (textarea).
  - Bind inputs using Formik's `getFieldProps()`.
- **Validation Rules (Yup Schema):**
  - `firstName`: Required text string.
  - `email`: Required valid email address format.
  - `type`: Select option ('hireMe', 'openSource', 'other').
  - `comment`: Required text (minimum 25 characters).
- **UI Error Feedback:**
  - Set `isInvalid` on Chakra `<FormControl>` when a field is touched (`touched[field]`) and contains an error (`errors[field]`).
  - Render validation message using `<FormErrorMessage>`.
- **Form Submission & Feedback Flow:**
  - Trigger `submit('/api/contact', values)` on form submit.
  - Disable button and set loading state (`isLoading={isLoading}`).
  - On response update:
    - **Success:** Call `onOpen('success', 'Thanks for your submission ${values.firstName}, we will get back to you shortly!')` and clear fields via `formik.resetForm()`.
    - **Error:** Call `onOpen('error', 'Something went wrong, please try again later!')`.

---

## 6. Global Alert Banner / Modal (`Alert.js`)
- Connect to `AlertContext` to render a Chakra UI `<AlertDialog>` or `<Alert>` notification banner.
- Display message dynamically based on submission response (green for success, red for error) with an explicit close/OK action.