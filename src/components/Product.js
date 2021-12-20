import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Product({name, price, image, description, stock_status, created_on, trend, production_state, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
       <Image source={{uri: image}} style={styles.thumb} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 1,
    marginVertical: 10,
    flex:2,
    margin:5
  },
  thumb: {
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color:'white'
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color:'white'
  },
});