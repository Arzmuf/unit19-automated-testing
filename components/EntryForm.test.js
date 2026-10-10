// LEVEL 2: COMPONENT TESTS for the form
import { render, fireEvent } from '@testing-library/react-native';
import EntryForm from './EntryForm';

test('saves the typed title and caption', () => {
  const onSave = jest.fn();
  const { getByPlaceholderText, getByText } = render(<EntryForm onSave={onSave} />);

  fireEvent.changeText(getByPlaceholderText('Title'), 'Beach day');
  fireEvent.changeText(getByPlaceholderText('Caption'), 'Sandcastle');
  fireEvent.press(getByText('Save'));

  expect(onSave).toHaveBeenCalledWith({ title: 'Beach day', caption: 'Sandcastle' });
});

test('shows an error and does not save when the title is empty', () => {
  const onSave = jest.fn();
  const { getByText } = render(<EntryForm onSave={onSave} />);

  fireEvent.press(getByText('Save'));

  expect(getByText('Title is required')).toBeTruthy();
  expect(onSave).not.toHaveBeenCalled();
});
