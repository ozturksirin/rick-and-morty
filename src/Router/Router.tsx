import React from "react";
import { RouterProps } from "./Index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/Screens/index";

const Stack = createNativeStackNavigator();

const Router = (props: RouterProps) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
