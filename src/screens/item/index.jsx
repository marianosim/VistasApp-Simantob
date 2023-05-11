import { View, Text } from "react-native";

import { styles } from "./styles";

const Item = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item</Text>
    </View>
  );
};

export default Item;
