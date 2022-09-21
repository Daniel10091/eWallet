import { StyleSheet } from "react-native"
import { Theme } from "../../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 140,
    marginHorizontal: Theme.Sizes.defaultSpace,
    transform: [
      {translateY: -52},
    ],
    borderRadius: 16,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: Theme.Colors.EerieBlackOpacity,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Theme.Colors.LightOpacity1,
  },
  balance: {
    alignItems: 'flex-start',
  },
  balanceTitle: {
    fontSize: 14,
    color: Theme.Colors.LavenderWeb,
  },
  valueContent: {
    marginTop: 20,
  },
  balanceValue: {
    fontSize: 20,
    color: Theme.Colors.White,
  },
  skeleton: {
    width: 60,
    height: 10,
    marginTop: 8,
    backgroundColor: Theme.Colors.SonicSilver,
    borderRadius: 50,
  },
  showBalance: {
    position: 'absolute',
    top: -20,
    right: -10,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonIcon: {
    fontSize: 20,
    color: Theme.Colors.LavenderWeb,
  },
  iconBar: {
    position: 'absolute',
    width: 2,
    height: 22,
    backgroundColor: Theme.Colors.LavenderWeb,
    borderRadius: 2,
    transform: [
      {rotate: '45deg'},
      {translateX: -0.7},
    ],
  },
  yield: {
    alignItems: 'flex-end',
  },
  yieldValue: {
    fontSize: 14,
    color: Theme.Colors.Green,
  },
  yieldExpenses: {
    fontSize: 14,
    color: Theme.Colors.RedCrayola,
  },
})

export default styles