import { View } from "react-native";

import { Categories } from "./screens";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
}
