# Pete - Portfolio (Meta Advanced React assignment)

A single page portfolio web application built with React, Chakra UI, Formik and Yup.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production bundle in dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
  App.js                        composes the page sections
  main.jsx                      ChakraProvider + AlertProvider bootstrap
  theme.js                      Chakra theme (global smooth scrolling)
  context/
    AlertContext.js             global alert state + useAlertContext()
  hooks/
    useSubmit.js                simulated async submit hook
  data/
    projects.js                 content for the projects grid
    socials.js                  header social links
  components/
    Header.js                   social links, in page nav, scroll aware hiding
    LandingSection.js           avatar, greeting and bio
    ProjectsSection.js          2x2 responsive project grid
    Card.js                     single project card widget
    ContactMeSection.js         Formik + Yup contact form
    Alert.js                    success / error AlertDialog
    FullScreenSection.js        full viewport layout primitive
public/images/                  project artwork (SVG)
```

## Notes on the implementation

- **Smooth scrolling**: the theme sets `html { scroll-behavior: smooth }` and the
  header links additionally call `scrollIntoView({ behavior: "smooth" })` after
  `preventDefault()`, so the URL hash is left untouched.
- **Scroll aware header**: a `scroll` listener compares the current `window.scrollY`
  with the previous value stored in a `useRef` and toggles
  `translateY(-200px)` / `translateY(0)` with a `transform 0.3s ease-in-out`
  transition.
- **JSX in `.js` files**: the assignment names its components with a `.js`
  extension, so `vite.config.js` registers a small `enforce: "pre"` plugin that
  runs `transformWithEsbuild(..., { loader: "jsx", jsx: "automatic" })` over the
  project sources. `optimizeDeps.esbuildOptions.loader` teaches the dependency
  pre bundler the same rule.
- **Simulated submission**: `useSubmit` waits 2 seconds and resolves with a
  success response, except when the comment contains the word `fail`, which
  produces the error response so the failure path can be demonstrated on
  demand. Replace the `shouldFail` helper with `Math.random() < 0.8` for a purely
  random outcome.
- **Form reset timing**: the alert dialog takes focus the moment it opens, which
  blurs the field being edited and marks it as touched. The success reset is
  therefore deferred with a zero delay `setTimeout` so the cleared form is not
  immediately re-flagged as invalid.
- **Accessibility**: every project image has `alt` text, every form control has a
  `label` bound through `htmlFor`, social icon links have `aria-label`s, the two
  `nav` landmarks are labelled, and `AlertDialog` supplies the
  `role="alertdialog"`, `aria-modal`, `aria-labelledby` and `aria-describedby`
  wiring plus focus trapping.