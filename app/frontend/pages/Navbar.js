import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Navbar({ navigation }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Home</Text>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Product')}>Product</Text>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Login</Text>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('SignUp')}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'pink',
    paddingVertical: 10,
    width: '100%', 
    position: 'absolute', 
    top: 0, 
    zIndex: 1000, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonText: {
    color: '#000', // Set text color to black
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15, // Space between buttons
  },
});