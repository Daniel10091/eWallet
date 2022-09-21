import { StyleSheet } from "react-native"
import { Theme } from "../../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },

  // Profile

  profile: {
    flex: 1,
    alignItems: 'center',
  },
  profileAvatarContent: {
    width: 108,
    height: 108,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 108,
  },
  profileAvatarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 108,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    zIndex: 1,
  },
  profileInfo: {
    marginTop: 46,
  },
  profileName: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: Theme.Colors.LavenderWeb,
  },
  profileUsername: {
    textAlign: 'center',
    marginTop: 6,
    fontSize: 14,
    color: Theme.Colors.SonicSilver,
  },
  editProfileBtn: {
    position: 'absolute',
    top: 0,
    right: 30,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Colors.EerieBlack02,
    borderRadius: 10,
  },
  editIcon: {
    fontSize: 16,
    color: Theme.Colors.LavenderWeb,
  },

  // All Contacts

  allContacts: {
    marginTop: 30,
  },
})

export default styles