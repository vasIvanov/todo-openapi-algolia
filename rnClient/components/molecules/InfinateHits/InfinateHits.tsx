import * as React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {useInfiniteHits} from 'react-instantsearch-core';

function Hit({hit}: any) {
  return <Text>{hit.title}</Text>;
}

export function InfiniteHits() {
  const {hits, isLastPage, showMore} = useInfiniteHits({
    escapeHTML: false,
  });

  return (
    <FlatList
      data={hits}
      keyExtractor={item => item.objectID}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={() => {
        if (!isLastPage) {
          showMore();
        }
      }}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Hit hit={item} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  item: {
    padding: 18,
    backgroundColor: '#fff',
  },
});
