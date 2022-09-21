import { StyleSheet } from "react-native"
import { Theme } from "../../constants"

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 200,
    marginTop: 40,
    paddingHorizontal: Theme.Sizes.defaultSpace,
  },

  // Card

  card: {
    // width: '100%',
    // height: '100%',
  },

  // Content

  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: Theme.Sizes.defaultSpace + 26,
    marginBottom: 26,
    borderRadius: 30,
  },
  balanceContent: {

  },
  balanceTitle: {
    fontSize: 17,
    color: Theme.Colors.White,
  },
  balanceValue: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },
  percentage: {
    marginBottom: 4,
    fontSize: 18,
    color: Theme.Colors.Green,
  },
})

export default styles