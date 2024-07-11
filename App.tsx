import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegador from './navigators/MainNavigator';

export default function App() {
  return (
    <Navegador/>
  );
}

const styles = StyleSheet.create({
});
