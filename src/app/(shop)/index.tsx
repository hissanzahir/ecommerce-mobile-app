import { FlatList,StyleSheet, Text, View } from 'react-native';
import { PRODUCTS } from '../../../assets/products';

const index = () => {
  return (
    <View>
      <FlatList 
      data={PRODUCTS} 
      renderItem={({ item }) => <View> </View>}
      
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})