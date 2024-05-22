import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CharacterInfo, Detail, Splash } from "@/Screens";
import BottomTab from "@/Router/BottomTab";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Main" component={BottomTab} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
