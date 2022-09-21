import { StatusBar, StyleSheet } from "react-native"

import { Theme } from "../../constants"

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 20

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight + 20,
    paddingHorizontal: Theme.Sizes.defaultSpace,
  },
  graphicContainer: {
    width: '100%',
    height: 240,
    backgroundColor: Theme.Colors.EerieBlack03,
    borderRadius: 14,
  },
})

export default styles