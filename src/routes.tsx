import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddReminder from "./pages/AddReminder";
import Main from "./pages/Main";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "Meus Lembretes",
          }}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          options={{
            title: "Adicionar Lembretes",
          }}
          name="AddReminder"
          component={AddReminder}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
