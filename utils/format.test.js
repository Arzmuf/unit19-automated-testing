// LEVEL 1: UNIT TESTS (pure functions, ~1 ms each)
// The base of the pyramid: lots of these, they are fast and cheap.
import { formatDate, validateEntry } from './format';

describe('formatDate', () => {
  test('formats an ISO date as day/month/year', () => {
    expect(formatDate('2026-04-30')).toBe('30/4/2026');
  });

  test('drops leading zeros from day and month', () => {
    expect(formatDate('2026-01-05')).toBe('5/1/2026');
  });
});

describe('validateEntry', () => {
  test('accepts a normal entry', () => {
    expect(validateEntry({ title: 'Day 1', caption: 'First sketch' })).toBeNull();
  });

  test('rejects an empty title', () => {
    expect(validateEntry({ title: '', caption: 'x' })).toBe('Title is required');
  });

  test('rejects a title that is only spaces', () => {
    expect(validateEntry({ title: '   ' })).toBe('Title is required');
  });

  test('rejects a caption over 140 characters', () => {
    const longCaption = 'a'.repeat(141);
    expect(validateEntry({ title: 'Ok', caption: longCaption })).toBe(
      'Caption must be 140 characters or less'
    );
  });
});
