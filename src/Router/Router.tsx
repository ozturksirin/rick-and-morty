import React from "react";
import { RouterProps } from "./Index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CharacterInfo, Detail, Favorite, Home, Splash } from "@/Screens/index";

const Stack = createNativeStackNavigator();

const Router = (props: RouterProps) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CharacterInfo"
            component={CharacterInfo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Favorite"
            component={Favorite}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
