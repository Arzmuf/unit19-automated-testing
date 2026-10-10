// YOUR TURN!
// Each test.todo below is a test for you to write.
// Change `test.todo('...')` into `test('...', () => { ... })` and fill it in.
// Run `npm test` after each one. Green = pass, red = fail.

import { render, fireEvent } from '@testing-library/react-native';
import { validateEntry } from '../utils/format';
import EntryForm from '../components/EntryForm';
import App from '../App';

// ⭐ Level 1: Unit test
// Hint: look at validateEntry in utils/format.js.
//       What should happen if the title is 41 characters long?
//       'a'.repeat(41) makes a string of 41 a's.
test.todo('rejects a title longer than 40 characters');

// ⭐⭐ Level 2: Component test
// Hint: render <EntryForm onCancel={...} />, then press the "Cancel" text.
//       How can you check that onCancel was called? (Think: jest.fn())
test.todo('calls onCancel when Cancel is pressed');

// ⭐⭐⭐ Level 3: Integration test
// Hint: start on the list, open an entry, then press "Back".
//       Which text should be visible again once you are back on the list?
test.todo('pressing Back returns to the list');

// 🤔 Think about it
// Is the test below worth writing? What would break if it didn't exist?
test.todo('the heading says Photo Journal');
