import React, {useEffect, useState, useContext} from 'react';
import { 
  StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { Rating } from 'react-native-ratings';  
import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';
import {
  Button,
  ButtonText,
} from './styles';

export function ProductDetails({route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  
  const { addItemToCart } = useContext(CartContext);
  
  useEffect(() => {
    setProduct(getProduct(productId));
  });
  
  function onAddToCart() {
    addItemToCart(product.id);
  }
  
  return (

  <ScrollView>
             <View style={styles.main}>
             
                 <Image
                  source={{ uri: product.photo }}
                      style={styles.fitImage}
                  />
                  <View style={styles.infoBox}>
                      <Text>Product </Text>
                      <Text style={styles.propText}>{product.name}</Text>
                  </View>
                 
                  <View style={styles.infoBox}>
                      <Text>Manufacture State</Text>
                      <Text style={styles.propText}>{product.production_state}</Text>
                  </View>
                  <View style={styles.infoBox}>
                      <Text>Price</Text>
                      <Text style={styles.propText}>${product.cost}</Text>
                  </View>
                 <View style={styles.rating}>
                   <View style={{...styles.infoBox}}>   
                     <Text>Description</Text>
                      <Text>{product.description}</Text>
                   </View>
                 <Rating
                 
                  startingValue={Math.floor(parseInt(product.rating))}
                      ratingCount={5}
                      imageSize={40}
                      showRating
                  />
                 </View>
                <View style={{alignItems:"center"}}>
                <Button
        onPress={onAddToCart}
      >
        <ButtonText>Add to cart</ButtonText>
      </Button>
                </View>
              
             </View>
             </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  main: {
    flex : 1,
    padding : 10,
},
rating : {
    marginTop:10,
    marginBottom:10
},
infoBox: {
   flexDirection:"row", 
   justifyContent:"space-between", borderColor:"gray",
   borderWidth:1,
    padding:10,
    marginTop:15,
        },
fitImage: {
    borderRadius: 5,
    zIndex : -1,
    resizeMode:"contain",
    width:"100%",
    height:430
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  defaultText:{
    fontSize : 15,
  },
  propText: {
    fontFamily : "halfmoon_bold",
    fontSize : 15,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',

  },
  production_state: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom:20,
  },
});