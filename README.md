# Jenne - Landing Page - Front-end

Jenne landing page front-end portal powered by React

# How to contribute

### Context

You have 3 branches :

- **staging** : this branch is for development purpose and quality team testing. If you need to push your changes to staging environment, you need to perform a merge request on **_staging_** branch. The CI/CD pipelines will do the rest. Changes would be available at https://stg.jenne.fr
- **production** : this branch is for production work. it will always contain the latest version validated and picked for production use by stakeholders. The changes should only come from a staging branch, validated by the quality test team. Production app is available at https://jeene.fr/

### Workflow

In order to contribute, you need to follow these steps :

1. Create an issue, please refer the US (User Story) created at "GitLab board"
2. Create a branch from the issue based on **staging** branch, use the automatic branch creation feature of Gitlab
3. Pull the branch locally, and start your dev
4. Make sure to make small commits in order to describe your process for reviewers. For this, we use conventional commits (refer to commit section below)
5. Once your work is done and tested locally (automated testing is optional), make sure to push your changes and ask for a merge request on **production** branch. A reviewer will validate your work and merge your changes (if accepted) to the **staging** branch, if your work is rejected, go back to the step 3.
6. You (or the persons in charge) can then merge the **staging** branch on **production**

# Commits convention

https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/

![img.png](commit-convention.png)

# Commits convention

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.

#### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: v2
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>`, `(<scope>)` and `<summary>` fields are mandatory.

##### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example : npm)
- **ci**: Changes to our CI configuration files and scripts (examples: gitlab-ci.yml, variables.json...)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests

##### Scope

The scope should be the name of the application version.

The following is the list of supported scopes:

- `v2`

##### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### <a name="commit-body"></a>Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

#### <a name="commit-footer"></a>Commit Message Footer

The footer can contain information about breaking changes and deprecations and is also the place to reference Gitlab issues, Azure Devops tickets, and other MRs that this commit closes or is related to.
For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

or

```
DEPRECATED: <what is deprecated>
<BLANK LINE>
<deprecation description + recommended update path>
<BLANK LINE>
<BLANK LINE>
Closes #<mr number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change.

Similarly, a Deprecation section should start with "DEPRECATED: " followed by a short description of what is deprecated, a blank line, and a detailed description of the deprecation that also mentions the recommended update path.

### Revert commits

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

# Must follow practices

## State management

### Context

We use Redux for state management.
For more info :

- [Redux - A predictable state container for JavaScript apps. | Redux](https://redux.js.org/)
- [React Redux | React Redux (react-redux.js.org)](https://react-redux.js.org/)

We also use thunk pattern to intercept Redux actions, and add bussiness logic before altering the state in the store.
For more info :

- [Redux-thunk ](https://redux.js.org/usage/writing-logic-thunks)

### How to

Every action in the application should result in the following implementation :

1. Create\* an action constant name under "store/actions/types"
2. Create\* the corresponding action function under "store/actions"
3. Create\* the corresponding reducer at "store/reducers"

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `npm run test:e2e`

Launches the test e2e with cypress.\

### `npm run eslint:fix`

Launches fix lint.\

### `npm run eslint`

Launches eslint for detect syntax error.\

### `npm run git:cz:push`

Launches git add . + npx cz + git push to be guided in the commit\

### `npm run git:cz`

Launches git add . + npx cz without push, just for save work and to be guided in the commit\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minifyz

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
