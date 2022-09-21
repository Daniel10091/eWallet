import { StyleSheet } from "react-native"
import { Theme } from "../../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  title: {
    marginLeft: Theme.Sizes.defaultSpace,
    fontSize: 14,
    color: Theme.Colors.SonicSilver,
  },

  // Search

  searchContainer: {
    marginTop: Theme.Sizes.defaultSpace,
    paddingHorizontal: Theme.Sizes.defaultSpace,
  },
  searchContent: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.Colors.EerieBlack02,
    borderRadius: 50,
  },
  searchIcon: {
    marginHorizontal: 20,
    fontSize: 18,
    color: Theme.Colors.SonicSilver,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 13,
    color: Theme.Colors.LavenderWeb,
  },

  // List

  resultsContainer: {
    marginTop: 25,
    paddingHorizontal: Theme.Sizes.defaultSpace,
  },
})

export default styles