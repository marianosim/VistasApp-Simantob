import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartNavigator from '../cart';
import OrdersNavigator from '../orders';
import ShopNavigator from '../shop';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
        }}
      />
      <BottomTab.Screen
        name="OrderTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Orders',
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
