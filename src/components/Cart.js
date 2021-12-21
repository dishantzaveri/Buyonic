import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet,TouchableOpacity,Alert } from 'react-native';

import { CartContext } from '../CartContext';

export function Cart ({navigation}) {

  const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
  
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (<View>
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>$ {total}</Text>
          </View>
          
          <View>
          <TouchableOpacity style={{ 
                justifyContent:"center", 
                alignItems:"center", 
                padding:10 ,
               
                backgroundColor:"#FF543C",
                borderRadius:3,
               
                marginBottom:20,
                }}
                onPress={()=>{
                  Alert.alert(
                    "Order Placed!",
                    "Thanks for Ordering. You will receive your order in 2-4 business days. Cash On Delivery!",
                    [{text: 'OK', onPress: () => console.log('Order Placed Success! You Have No Item in Your Cart List. ')}]
                  );

                }}
                >
              <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>Order Now</Text>
              </TouchableOpacity>
       </View>
       </View>
       
    );
  }

  function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
       </View>
    );
  }
  
  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});