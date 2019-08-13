import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './styles';

const pushScreen = props => {
  const {componentId} = props;
  Navigation.push(componentId, {
    component: {
      name: 'PushedScreen',
    },
  });
};

const openModal = () => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: 'ModalScreen',
            passProps: {
              text: 'This is the modal screen',
            },
            options: {
              topBar: {
                title: {
                  text: 'Title text',
                },
                leftButtons: [
                  {
                    color: '#00bfff',
                    text: 'button',
                    id: 'leftButton',
                  },
                ],
              },
            },
          },
        },
      ],
    },
  });
};
const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsSection}>
        <TouchableOpacity
          onPress={() => pushScreen(props)}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Push Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal} style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>open a modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
