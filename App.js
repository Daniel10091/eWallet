import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { Navigator } from './src/components'
import { Theme } from './src/constants'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Navigator/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.RichBlackFOGRA39,
  },
})
