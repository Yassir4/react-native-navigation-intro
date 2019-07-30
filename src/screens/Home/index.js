import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsSection}>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Push Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>open a modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
