// import React, {useEffect, useState} from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// import { Product } from '../components/Product.js';
// import { getProducts } from '../services/ProductsService.js';

//  export function ProductsList ({navigation}) {
//   const [products, setProducts] = useState([]);

//   const renderItem = ({item:products}) => {
//     return (
//       <Product {...products} 
//       onPress={() => {
//         // navigation.navigate('ProductDetails', {
//         //   productId: product.id,
//         // });
//       }}
//       />
//     );
//   }
  
//   async function ProductsList() {
//     try {
//       const response = await fetch( 
//         'https://buyoni.herokuapp.com/product/',  {
//           method: 'GET', // *GET, POST, PUT, DELETE, etc.
          
        
//           headers: {'Authorization': 'Token 39e914d1f49ceb066a7f2e971628d35445d86db6' 
//            }}
//       );
//       const json = await response.json();
//       setProducts(json.products);
//     } catch (error) {
//       console.error(error);
//     } 
//   }
// //   const [products, setProducts] = useState([]);
  
// useEffect(() => {
//   ProductsList();
// }, []);
//   return (
//     <FlatList
      
//       style={styles.productsList}
//       contentContainerStyle={styles.productsListContainer}
//       keyExtractor={({id}) => id}
//       data={products}
//       numColumns={2}
//       renderItem={renderItem}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   productsList: {
//     backgroundColor: 'white',
    
//   },
//   productsListContainer: {
//     backgroundColor: 'white',
    
//     paddingVertical: 8,
//     marginHorizontal: 8,
//   },
// });