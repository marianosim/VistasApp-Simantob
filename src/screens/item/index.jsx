import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { PRODUCTS } from '../../constants';

const Item = ({ route }) => {
  const { itemId } = route.params;

  const item = PRODUCTS.find((item) => item.id === itemId);
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>U$D {item.price}</Text>
      <Text style={styles.weight}>Weight: {item.weight}</Text>
    </View>
  );
};

export default Item;
