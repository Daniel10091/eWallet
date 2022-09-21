import { StyleSheet } from "react-native"
import { Theme } from "../../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controls: {
    marginTop: 10,
    marginBottom: 12,
  },
  option: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: Theme.Colors.EerieBlack02,
    borderRadius: 10,
  },
  label: {
    fontSize: 12,
    color: Theme.Colors.SonicSilver,
  },
})

export default styles