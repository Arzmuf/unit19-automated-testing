# Unit 19: Automated Testing 🧪

A tiny **Photo Journal** app with a real test suite, built with Expo, Jest and React Native Testing Library.

## Get started

```bash
npm install
npm test          # run every test once
npm run test:watch   # rerun tests every time you save a file
npm run test:coverage  # see which lines your tests touch
npx expo start    # run the app on your phone with Expo Go
```

## What's inside

```
App.js                          the app: list, new entry form, detail screen
components/
  EntryCard.js                  one journal entry in the list
  EntryCard.test.js             🧩 component tests
  EntryForm.js                  the "new entry" form
  EntryForm.test.js             🧩 component tests
utils/
  format.js                     formatDate + validateEntry (pure functions)
  format.test.js                ✅ unit tests
__tests__/
  App.integration.test.js       🔄 integration tests
exercises/
  student-practice.test.js      ✏️ your turn!
```

## The testing pyramid

```
          /  E2E   \          few, slow
         / Integration \      some
        /  Component    \     more
       /  Unit (pure JS)  \   many, instant
```

Lots of fast tests at the bottom, only a few slow ones at the top.

## Three tools you'll use all the time

| Tool | What it does |
| --- | --- |
| `render(<Thing />)` | Puts a component on a pretend screen |
| `getByText('Save')` | Finds something by the words the user can see |
| `fireEvent.press(...)` | Pretends to tap it |
| `fireEvent.changeText(input, 'hi')` | Pretends to type |
| `jest.fn()` | A fake function that remembers if it was called |
| `expect(x).toBe(y)` | Checks the answer |

## Golden rule

> Test what the **user sees and does**, not how the code works inside.

Before writing a test, ask: *"What would actually break if this test didn't exist?"*
If the answer is "nothing anyone would notice", skip it.
