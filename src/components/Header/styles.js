import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { Theme } from "../../constants"

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 20

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.Sizes.defaultSpace,
    paddingTop: statusBarHeight + 20,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
  // Content

  content: {
    flex: 1,
    zIndex: 1,
  },
  welcome: {
    marginBottom: 4,
    fontSize: 14,
    color: Theme.Colors.LavenderWeb,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },

  // Button

  profileButton: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Colors.Jet,
    borderRadius: 100,
    zIndex: 1,
  },
  buttonAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
})

export default styles