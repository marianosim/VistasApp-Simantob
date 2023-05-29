import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const Item = () => {
  const item = useSelector((state) => state.products.selected);
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
