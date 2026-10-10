// LEVEL 3: INTEGRATION TESTS (several components together, ~100 ms each)
// Keep these few. They are slower and break more easily than unit tests.
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

test('adding an entry updates the list', () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  fireEvent.press(getByText('+ New Entry'));
  fireEvent.changeText(getByPlaceholderText('Title'), 'Test entry');
  fireEvent.press(getByText('Save'));

  expect(getByText('Test entry')).toBeTruthy();
});

test('tapping an entry opens its detail screen', () => {
  const { getByText, queryByText } = render(<App />);

  fireEvent.press(getByText('Park walk'));

  expect(getByText('Back')).toBeTruthy();
  expect(queryByText('+ New Entry')).toBeNull(); // the list is gone
});
