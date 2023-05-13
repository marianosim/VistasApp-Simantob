import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, Item, Products } from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
