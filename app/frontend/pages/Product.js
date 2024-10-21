// Product.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Navbar from './Navbar';
export default function Product({ navigation }) {
  const goBackHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
        <Navbar navigation={navigation}/>
      <Text style={styles.title}>Product Page</Text>
      <Button title="Back to Home" onPress={goBackHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
