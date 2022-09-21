import { StyleSheet } from "react-native"
import { Theme } from "../../../constants"

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Theme.Colors.EerieBlack01,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  // Icon

  iconArea: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  icon: {
    fontSize: 17,
    transform: [
      Platform.OS === 'ios' ? {translateX: 0.6} : {translateX: 0},
    ],
  },

  // Content

  content: {
    marginLeft: Theme.Sizes.defaultSpace,
  },
  title: {
    fontSize: 13,
    color: Theme.Colors.LavenderWeb,
  },
  client: {
    marginTop: 4,
    fontSize: 11,
    color: Theme.Colors.SonicSilver,
  },
  value: {
    marginTop: 4,
    fontSize: 11,
    color: Theme.Colors.SonicSilver,
  },

  // Date

  itemDate: {
    
  },
  date: {
    fontSize: 10,
    color: Theme.Colors.SonicSilver,
  }
})

export default styles