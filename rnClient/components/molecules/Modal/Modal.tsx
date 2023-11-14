import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../store';
import {selectCurrentUser} from '../../../store/authSlice';
import Input from '../../atoms/Input';
import {createTodo} from '../../../store/todoSlice';

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState({
    title: '',
    body: '',
  });
  const user = useAppSelector(selectCurrentUser);

  const onChangeText = (data: any) => {
    setFormValues(prevState => ({
      ...prevState,
      [data.name]: data.value,
    }));
  };

  const submitHandler = () => {
    if (!user) {
      return;
    }
    dispatch(
      createTodo({...formValues, userId: (user as Record<string, any>)._id}),
    );
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalView}>
            <Input
              label="Todo Title"
              onChangeText={(text: string) =>
                onChangeText({name: 'title', value: text})
              }
            />
            <Input
              label="Todo Body"
              onChangeText={(text: string) =>
                onChangeText({name: 'body', value: text})
              }
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                submitHandler();
                setModalVisible(false);
              }}>
              <Text style={styles.textStyle}>Add Todo</Text>
            </Pressable>
          </View>
        </TouchableOpacity>
      </Modal>
      <Button title="+ Add" onPress={() => setModalVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: 150,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalComponent;
