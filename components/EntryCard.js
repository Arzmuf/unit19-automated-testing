import { Pressable, StyleSheet, Text } from 'react-native';
import { formatDate } from '../utils/format';

// One journal entry in the list. Tapping it calls onPress with the entry id.
export default function EntryCard({ entry, onPress }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => onPress?.(entry.id)}
      accessibilityRole="button"
    >
      <Text style={styles.title}>{entry.title}</Text>
      {entry.caption ? <Text style={styles.caption}>{entry.caption}</Text> : null}
      {entry.date ? <Text style={styles.date}>{formatDate(entry.date)}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  title: { fontSize: 18, fontWeight: '600', color: '#111827' },
  caption: { fontSize: 15, color: '#4b5563', marginTop: 4 },
  date: { fontSize: 13, color: '#9ca3af', marginTop: 8 },
});
