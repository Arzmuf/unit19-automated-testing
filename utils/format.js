// Pure functions: inputs in, output out, no side effects.
// These are the easiest (and most valuable) things to unit test.

/**
 * Turns an ISO date like '2026-04-30' into '30/4/2026'.
 *
 * Why not just `new Date(iso).toLocaleDateString('en-MY')`?
 * `new Date('2026-04-30')` is read as UTC midnight. On a computer in a
 * timezone behind UTC that is still the 29th, and the locale output can
 * also differ between machines ('30/4/2026' vs '30/04/2026').
 * Splitting the string ourselves gives the same answer everywhere,
 * which is exactly what a test needs.
 */
export function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day}/${month}/${year}`;
}

/**
 * Checks a new journal entry before saving.
 * Returns an error message, or null when the entry is fine.
 */
export function validateEntry({ title = '', caption = '' }) {
  if (title.trim() === '') return 'Title is required';
  if (title.trim().length > 40) return 'Title must be 40 characters or less';
  if (caption.length > 140) return 'Caption must be 140 characters or less';
  return null;
}
