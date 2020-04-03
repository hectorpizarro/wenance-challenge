WENANCE Challenge

The code is a development challenge developed for Wenance in 2 days. The app
loads data from the Star Wars API, provides a search form and allows to delete
records from the Redux store.

All elements are responsive and should look fine on mobile. Redux slice,
actions, reducers were created using Redux Toolkit
(https://redux-toolkit.js.org/) the new solution recommended by Redux.

I didn't add functionality for pagination as it was out of the challenge's
scope, but created the component anyway to show current page and pages total.

Each search is stored in Redux. If the user searches a term that was previously
requested the app will return the stored data, this way we prevent a new API
request.

Install the project using:

npm i

Then run the app using:

npm start

CODE FORMAT / IDE CONFIGURATION

I use Visual Studio Code for development. The project includes Eslint and
Prettier to assure standard format and good code practices. The configuration is
available in .eslintrc.js and .prettierrc.js.

CSS

The app styles were standarized using normalize.css, for this challenge it has
been built and tested using Brave and Chrome. All component styles were built
using Styled Components. Each component has a \*.styles.js inside the same
folder with all the styled componnets defined, this way we can keep apart styles
from the component internal logic.

- Global CSS was defined using createGlobalStyle(), see
  src/shared/GlobalStyle.js.
- A global theme was applied using ThemeProvider on index.js.

TESTS

There are two sets of tests:

- I used Storybook to test the UI/UIX for all components. All storybook tests
  are included in \*.stories.js files. Run the webapp to see the tests
  executing:

  npm run storybook

  A JS warning is shown the first time storybook is executed, this is a known
  issue as decribed in (https://github.com/storybookjs/storybook/issues/10204)
  and has no impact on tests.

- I added unit tests for the Redux slice and the CardsList component. Unit tests
  are named \*.test.js. Run the tests using:

  npm run test

CAVEAT

I found a conflict between storybook and react-scripts, both provided different
versions for the webpack package dependency. I solved the problem and the app
should build fine, but if there is an issue please contact me to check again.
