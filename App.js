import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import EntryCard from './components/EntryCard';
import EntryForm from './components/EntryForm';

const STARTER_ENTRIES = [
  { id: '1', title: 'Day 1', caption: 'First sketch', date: '2026-10-01' },
  { id: '2', title: 'Park walk', caption: 'Ducks everywhere', date: '2026-10-05' },
];

// Local date as 'YYYY-MM-DD' (avoids the UTC shift of toISOString()).
function todayIso() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default function App() {
  const [entries, setEntries] = useState(STARTER_ENTRIES);
  const [screen, setScreen] = useState('list'); // 'list' | 'new' | 'detail'
  const [selectedId, setSelectedId] = useState(null);

  function addEntry({ title, caption }) {
    const entry = { id: String(Date.now()), title, caption, date: todayIso() };
    setEntries(current => [entry, ...current]);
    setScreen('list');
  }

  function openEntry(id) {
    setSelectedId(id);
    setScreen('detail');
  }

  const selected = entries.find(e => e.id === selectedId);

  return (
    <View style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.heading}>Photo Journal</Text>

        {screen === 'list' && (
          <>
            <Pressable style={styles.newButton} onPress={() => setScreen('new')}>
              <Text style={styles.newButtonText}>+ New Entry</Text>
            </Pressable>
            <FlatList
              data={entries}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <EntryCard entry={item} onPress={openEntry} />}
              ListEmptyComponent={<Text style={styles.empty}>No entries yet</Text>}
            />
          </>
        )}

        {screen === 'new' && (
          <EntryForm onSave={addEntry} onCancel={() => setScreen('list')} />
        )}

        {screen === 'detail' && selected && (
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>{selected.title}</Text>
            <Text style={styles.detailCaption}>{selected.caption}</Text>
            <Pressable onPress={() => setScreen('list')}>
              <Text style={styles.back}>Back</Text>
            </Pressable>
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f9fafb' },
  container: { flex: 1, padding: 16, paddingTop: 48 },
  heading: { fontSize: 28, fontWeight: '700', marginBottom: 16, color: '#111827' },
  newButton: {
    backgroundColor: '#4f46e5',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  newButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  empty: { textAlign: 'center', color: '#9ca3af', marginTop: 32 },
  detail: { backgroundColor: '#fff', padding: 20, borderRadius: 12 },
  detailTitle: { fontSize: 24, fontWeight: '700', color: '#111827' },
  detailCaption: { fontSize: 16, color: '#4b5563', marginTop: 8 },
  back: { color: '#4f46e5', fontWeight: '600', marginTop: 20 },
});
