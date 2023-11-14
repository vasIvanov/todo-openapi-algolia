import * as React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {useSearchBox} from 'react-instantsearch-core';
import InfiniteHits from '../InfinateHits';

export function SearchBox() {
  const {query, refine} = useSearchBox();

  function setQuery(newQuery: string) {
    refine(newQuery);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setQuery}
        clearButtonMode="while-editing"
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        autoComplete="off"
      />
      {query && <InfiniteHits />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252b33',
    padding: 18,
  },
  input: {
    height: 48,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
