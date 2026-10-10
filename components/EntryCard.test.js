// LEVEL 2: COMPONENT TESTS (one component, ~10 ms each)
// Test what the USER sees and does: visible text and taps.
import { render, fireEvent } from '@testing-library/react-native';
import EntryCard from './EntryCard';

test('shows title and caption', () => {
  const { getByText } = render(
    <EntryCard entry={{ id: '1', title: 'Day 1', caption: 'First sketch' }} />
  );
  expect(getByText('Day 1')).toBeTruthy();
  expect(getByText('First sketch')).toBeTruthy();
});

test('shows the formatted date', () => {
  const { getByText } = render(
    <EntryCard entry={{ id: '1', title: 'Day 1', date: '2026-04-30' }} />
  );
  expect(getByText('30/4/2026')).toBeTruthy();
});

test('calls onPress with the entry id when tapped', () => {
  // jest.fn() is a "mock": a fake function that remembers how it was called.
  const onPress = jest.fn();
  const { getByText } = render(
    <EntryCard entry={{ id: '1', title: 'Day 1', caption: 'x' }} onPress={onPress} />
  );

  fireEvent.press(getByText('Day 1'));

  expect(onPress).toHaveBeenCalledWith('1');
});
