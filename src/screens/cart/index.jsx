import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { CartItem } from '../../components';
import { CART } from '../../constants/data/cart';

const Cart = () => {
  const TOTAL = 2000;
  const onRemove = (id) => {
    console.warn(id);
  };
  const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>U$D {TOTAL}</Text>
          </View>
          <Text style={styles.buttonConfirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
