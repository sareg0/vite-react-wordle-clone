### 2022-12-27
A busy few weeks. Have not had the time to do anything
Able to spend 1.5 hours this morning. 

Let's rock.

What does it mean when the lines iwth the Total TS extension are blue?

Oh, okay. I have to mark it as learned to have it go away. 
Hmm... That was not obvious

When I mark as learned where does that information go? Also it's quite slow
to process it at first. I experienced the same with the TypeChallenges extension.

Open Source. I want to start an open source project which gains money. 

I can't remember why I spearated the BoardRow

Okay, time's up. 
I just realised that I jumped straight into coding, and it was not that helpful

The idea is to do TDD where possible. 
Instead of futzing with the BoardRow code, I maybe should have started with a test.

Stopping point. 
Created a way to capture the changing guesses in the BoardRow

The new React docs are very helpful
https://beta.reactjs.org/learn/updating-arrays-in-state#replacing-items-in-an-array

Having worked with Vue for a bit, it's hard to remember that one shouldn't mutate
arrays (because in React the array is not Reactive), and you need to create a new Array
to set the state. 

### 2022-12-06
Oops. 
It's been a hot minute since I did anything
Got distracted by Advent of Code for a few days.

I stumbled across this video from Ben Myers
https://www.youtube.com/watch?v=qMvQG47kzJ4

did not know. 
* tables need captions. 4m03s


Okay.. Trying not to get too distracted by that video, but
an interesting idea to try. Maybe for the next implementation

I actually have like three videos I could watch to correct this app 🤣

I'll just try finishing this myself first and then improve it.

Okay, starting with a failing test. Now I remember I had to stop 
because I had to start work. 

Kind of gives me a good starting point ;D

```
TestingLibraryElementError: Unable to find an accessible element with the role "alert"
```
```
expect(screen.getByRole("alert")).toHaveTextContent("word is too short");
```
Changed to title
```
expect(screen.getByText("word is too short")).toBeInTheDocument();
```

The error about using a window.alert is below
```
Error: Not implemented: window.alert
```

So I understand that I need to mock the window
https://stackoverflow.com/questions/55787988/window-alert-not-implemented-when-running-tests

"Sometimes all you need is to validate whether or not a specific function has been called (and possibly which arguments were passed). In these cases a spy would be all we need which you can use directly with vi.spyOn() (read more here)." - https://vitest.dev/guide/mocking.html#functions

Should I 
* spyOn?
* mock the implementation using `vi.fn()`
* stub the global?


The difference between them
* spyOn is good for seeing a function has been called
* spies cannot help you alter the implementation of the function
* my assumption is that `Error: Not implemented: window.alert` indicates I need
to implement the window

I am tempted to just avoid using window. 

I could try another implementation 
I did. Went with div of role alert

Stopping point. splitting out the Board Row from the Board file


### 2022-11-30
Using user events is very intuitive. 

I am trying to validate that a word is too short, and 
that an alert shows when a user tries to submit a too short word.

However, trying to implement a window.alert in React and testing
for its existence int the test fails with 


```
Error: Not implemented: window.alert
```
What does `Error: Not implemented: ` mean?
What is the right thing to do about it. 
Most examples involve Jest.

I still don't get if jest-dom is the right package. 

Do I need to do this? 
https://vitest.dev/guide/mocking.html#globals


Okay, I am also looking at alternatives
aria-alert? Would that work in the test environmnet?
Also, woah, look at these form validity state things:

https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooShort



### 2022-11-29
Woah, where did the last few days go. 

Concentrating on validating the guesses this week. 

What is the difference between 
testing library 'jest-dom' and 'dom'?
https://github.com/testing-library/dom-testing-library
https://github.com/testing-library/jest-dom

Ah, they have a comment in this code; 

https://testing-library.com/docs/dom-testing-library/example-intro
```
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom'
```

https://testing-library.com/docs/user-event/intro
Test a word that is too short... show an alert/error
### 2022-11-26
Expand tests. 
Disable fields that aren't the first row
Trying not to jump ahead too quick

https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#not-using-testing-libraryuser-event

### 2022-11-25
Triple
arrange, act, assert
The video says 
* given (arrange)
* when (act)
* then (assert)

start to create the public API of our game - 35m20s
### 2022-11-24
TDD Wordle: https://youtu.be/e2ypufHTMu4 

Notes:
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

The most pleasant part was the confetti
<img width="1306" alt="Colourful confetti streaming down success screen after deploying successfully to Vercel" src="https://user-images.githubusercontent.com/1307818/203489992-8858056f-b387-4f09-a7e0-c5de830ea19f.png">


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
5 letter words in Node. Mainly to do a knowledge check.
https://github.com/sareg0/wordle-clone

__Difficulties__
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
* adding a linter ✅ (2022-11-23)
* adding a formatter ✅ (2022-11-23)
* removing Storybook boilerplate

The idea is to be as Test-Driven as possible and implemented accessibility testing at the beginning of the project. 

I want to make sure it can be built on something. 
Let's try Vercel. 

Reads today while trying to figure stuff out
* Vite Preview JS: https://youtu.be/_XlUQhIBDH4
* Drew Powers article on testing using Vite: https://pow.rs/blog/vitest/
* Queries in Testing Library: 
* TDD Wordle: https://youtu.be/e2ypufHTMu4 (watched about 30 minutes of this)
