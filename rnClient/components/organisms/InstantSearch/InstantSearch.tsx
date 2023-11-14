import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import algoliasearch from 'algoliasearch';
import Config from 'react-native-config';
import {InstantSearch} from 'react-instantsearch-core';
import {SearchBox} from '../../molecules/SearchBox/SearchBox';

const searchClient = algoliasearch(
  Config.REACT_APP_AlgoliaApplicationID ?? '',
  Config.REACT_APP_AlgoliaSearchOnlyAPIKey ?? '',
);

export default function InstantSearchSection() {
  return (
    <View style={styles.container}>
      <InstantSearch searchClient={searchClient} indexName="dev_test">
        <SearchBox />
      </InstantSearch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
});
