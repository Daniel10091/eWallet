import { StyleSheet } from "react-native"
import { Theme } from "../../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    transform: [
      {translateY: -12},
    ],
  },
  title: {
    marginLeft: Theme.Sizes.defaultSpace,
    fontSize: 14,
    color: Theme.Colors.SonicSilver,
  },
  list: {
    flex: 1,
    marginTop: Theme.Sizes.defaultSpace,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  addContact: {
    width: 92,
    height: 110,
    backgroundColor: Theme.Colors.EerieBlack02,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconArea: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 46,
  },
  icon: {
    fontSize: 20,
    color: Theme.Colors.White,
    zIndex: 1,
  },
  iconBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 46,
  },
  label: {
    height: 26,
    marginTop: 12,
    justifyContent: 'center',
    textAlign: 'center',
  },
  labelContent: {
    textAlign: 'center',
    fontSize: 10,
    color: Theme.Colors.RomanSilver,
  },
})

export default styles