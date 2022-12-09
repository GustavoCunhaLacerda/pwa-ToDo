import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddToDo from "./pages/AddToDo";
import Main from "./pages/Main";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AddToDo" component={AddToDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
