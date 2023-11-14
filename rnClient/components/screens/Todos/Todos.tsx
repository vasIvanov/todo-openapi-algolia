import * as React from 'react';
import {FlatList, View, Text} from 'react-native';
import InstantSearchSection from '../../organisms/InstantSearch/InstantSearch';
import {useAppDispatch, useAppSelector} from '../../../store';
import {useEffect} from 'react';
import {getTodos, selectAllTodos} from '../../../store/todoSlice';

export default function TodosScreen() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectAllTodos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
      }}>
      <InstantSearchSection />
      <FlatList
        data={todos}
        renderItem={({item}: any) => <Text>{item?.title}</Text>}
      />
    </View>
  );
}
