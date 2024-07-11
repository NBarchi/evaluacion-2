import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OperacionesScreen from "../screens/OperacionesScreen";
import HistorialScreen from "../screens/HistorialScreen";
import { NavigationContainer } from "@react-navigation/native";





const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="BottomTabs" component={MyTabs} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs (){
    return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Operaciones" component={OperacionesScreen} />
        <Tab.Screen name="Historial" component={HistorialScreen}/>
    </Tab.Navigator>
    )
}

export default function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}