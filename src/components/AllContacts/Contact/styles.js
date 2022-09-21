import { StyleSheet } from "react-native"
import { Theme } from "../../../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 5,
  },
  button: {
    width: 92,
    height: 110,
    marginRight: 10,
    backgroundColor: Theme.Colors.EerieBlack02,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46,
  },
  name: {
    height: 26,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContent: {
    textAlign: 'center',
    fontSize: 10,
    color: Theme.Colors.RomanSilver,
  },
})

export default styles