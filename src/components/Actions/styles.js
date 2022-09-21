import { StyleSheet } from "react-native"
import { Theme } from "../../constants"

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    transform: [
      {translateY: -32},
    ],
  },
  content: {
    flex: 1,
  },
  button: {
    width: 'auto',
    height: 'auto',
    marginRight: 20,
  },
  iconArea: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Colors.EerieBlack02,
    borderRadius: 60,
  },
  icon: {
    fontSize: 22,
    color: Theme.Colors.LavenderWeb,
  },
  label: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 11,
    color: Theme.Colors.SonicSilver,
  },
})

export default styles