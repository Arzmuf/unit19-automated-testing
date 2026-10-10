import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { validateEntry } from '../utils/format';

// Form for a new entry. Shows an error instead of saving bad input.
export default function EntryForm({ onSave, onCancel }) {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [error, setError] = useState(null);

  function handleSave() {
    const problem = validateEntry({ title, caption });
    if (problem) {
      setError(problem);
      return;
    }
    onSave({ title: title.trim(), caption: caption.trim() });
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Caption"
        value={caption}
        onChangeText={setCaption}
        multiline
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.row}>
        <Pressable style={[styles.button, styles.secondary]} onPress={onCancel}>
          <Text style={styles.secondaryText}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { backgroundColor: '#fff', padding: 16, borderRadius: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  multiline: { minHeight: 80, textAlignVertical: 'top' },
  error: { color: '#dc2626', marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'flex-end', gap: 8 },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  secondary: { backgroundColor: '#f3f4f6' },
  secondaryText: { color: '#374151', fontWeight: '600' },
});
