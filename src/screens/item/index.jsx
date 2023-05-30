import { View, Text, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants';
import { addToCart } from '../../store/actions';

const Item = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>U$D {item.price}</Text>
      <Text style={styles.weight}>Weight: {item.weight}</Text>
      <Button title="Add to cart" onPress={onAddToCart} color={COLORS.text} />
    </View>
  );
};

export default Item;
