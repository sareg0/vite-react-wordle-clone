### 2022-11-26
Expand tests. 
Disable fields that aren't the first row
Trying not to jump ahead too quick

### 2022-11-25
Triple
arrange, act, assert
The video says 
* given (arrange)
* when (act)
* then (assert)

start to create the public API of our game - 35m20s
### 2022-11-24
* TDD Wordle: https://youtu.be/e2ypufHTMu4 (watched another 30 minutes of this)

TDD loop. What are the rules we care about?
do not test implementation details; Express the what, not the how

First test (stolen from the video)
When a user creates a new game
It should be any empty 6 x 5 grid, where each tile of the gird is empty


I like that he wrote this all down

### 2022-11-23
Really need some linting and formatting. It's already getting hard to read

https://eslint.org/

```
npm init @eslint/config
```


```
me@mycomputer wordle-vite-project % npm init @eslint/config
Need to install the following packages:
  @eslint/create-config@0.4.1
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard-with-typescript@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.0.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@*
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

Trying to push up to vercel to see if everything builds, and check
I haven't broken anything. 

https://editorconfig.org/ - add two spaces as default

Turn on `Format on Save` at user level in VSCode

Wow, okay. Doing this a few times over at work really helped speed this up this 
time... cool. Practice practice, setting this up from scratch.


Push to vercel. Already had an account. 
Like Netlify, it was very straightforward
It could detect all the settings.

https://vite-react-wordle-clone.vercel.app/


Now I'm thinking about storbyook
https://storybook.js.org/blog/storybook-for-vite/
It looks like it does not have a webpack config and is
using Vite by default. 

Adding @storybook/addon-a11y
Building storybook fails. 

aha it was a spelling error on my part 🙈


### 2022-11-22
After a fair bit of pottering around on the internet, I used the following resources to help create
the commits from today:

* [Scaffold Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
```
npm create vite@latest
```
This created most of the scaffold for the project. 
It opened a command line interface for
choosing the configuration options


After doing this, I look up the Vitest example repos, and replicated the test
setup they had for the React Vitest example

* [Vitest > Getting Started > Examples](https://vitest.dev/guide/#examples)
  * [`react-testing-lib` ](https://github.com/vitest-dev/vitest/tree/9626fdef58f1e2cd5d3a77d94194d01b3d7c1d81/examples/react-testing-lib)


Last for today, I installed Storybook using their guide https://storybook.js.org/docs/react/get-started/install

Despite initial confusion on my part,
it felt like the installation of the test libraries went relatively smoothly

I have another project with some initial work to trim a list down to a list of
5 letter words.


Difficulties
1. Putting all the information together
2. Test failures
When trying to query the form element for the board, I kept getting a failure: 
`Unable to find an accessible element with the role "form" #474`

After reading the following issue it seemed that the form needs all the
correct attributes to pass as having the role of `form`
https://github.com/testing-library/dom-testing-library/issues/474

I couldn't quite understand what was needed, so I attempted to find the 
code for the `ByRole` query

* https://testing-library.com/docs/queries/about#types-of-queries
* https://github.com/orgs/testing-library/repositories?q=query&type=all&language=&sort=
* https://github.com/testing-library/which-query
    * https://testing-playground.com/

I found the testing playground, above, and this helped with experimentation a bit. 

```
    <form name="board" title="guesses">
    <Input />
    <input type="submit" />
    </form>
```
This is what allowed `getByRole('form')` to work correctly. 


Some things to add/fix:
* adding a linter
* adding a formatter
* removing Storybook boilerplate

The idea is to be as Test-Driven as possible and implemented accessibility testing at the beginning of the project. 

I want to make sure it can be built on something. 
Let's try Vercel. 

Reads today while trying to figure stuff out
* Vite Preview JS: https://youtu.be/_XlUQhIBDH4
* Drew Powers article on testing using Vite: https://pow.rs/blog/vitest/
* Queries in Testing Library: 
* TDD Wordle: https://youtu.be/e2ypufHTMu4 (watched about 30 minutes of this)
