import { StyleSheet } from "react-native"
import { Theme } from "../../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.RichBlackFOGRA39,
  },

  // Layout

  layout: {
    flex: 1,
  },

  // Navegation

  navigation: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: Theme.Sizes.defaultSpace,
    backgroundColor: Theme.Colors.EerieBlack01,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Theme.Colors.EerieBlack03,
  },
  button: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  primaryButton: {
    marginHorizontal: 10,
    // backgroundColor: Theme.Colors.MagentaCrayola,
  },
  buttonBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 50,
  },
  buttonIcon: {
    fontSize: 22,
    color: Theme.Colors.Independence,
    zIndex: 1,
  },
  buttonActiveIcon: {
    fontSize: 22,
    color: Theme.Colors.DeepPink,
  },
  primaryButtonIcon: {
    color: Theme.Colors.White,
  },
})

export default styles