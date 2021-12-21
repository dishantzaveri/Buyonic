import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Product({name, cost, photo, onPress}) {

  // addToWishListHandler = (book)=>{
  //   props.addToWishList(book);
  //   getItemsCount();
  //   }


  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={{uri:photo }}
      />
      <View style={styles.infoContainer}>
        <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.cost}>$ {cost}</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.name} onPress={()=>{
                  // addToWishListHandler(newBook);
                }}>
              </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'white',
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
    flexDirection:'row'
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
});