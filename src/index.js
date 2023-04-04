import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import UsuarioCadastro from "./screens/UsuarioCadastro";


const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MTB"
                    component={MBTNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MTB = createMaterialBottomTabNavigator();
export function MBTNavigation() {
    return (
        <MTB.Navigator>
            <MTB.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <MTB.Screen
                name="CadastroScreen"
                component={UsuarioCadastro}
            />
        </MTB.Navigator>
    )
}