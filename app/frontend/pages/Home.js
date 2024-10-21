// Home.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Navbar from './Navbar';

export default function Home({ navigation }) {
  const navigateToProduct = () => {
    navigation.navigate('Product');
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
        <Navbar navigation={navigation}/>
      <Text style={styles.title}>Home Page</Text>
       {/* Add Image Component */}
       <Image
        style={styles.image}
        source={require('../assets/download.jpeg')}
      />

      <Button title="Go to Product Page" onPress={navigateToProduct} />
      <Button title="Go to Login Page" onPress={navigateToLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,  // Set the size of the image
    marginBottom: 20,
    borderRadius: 10, // Optional: Adds rounded corners to the image
  },
});
