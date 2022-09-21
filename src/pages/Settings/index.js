import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import AllContacts from "../../components/AllContacts"

import styles from './styles'
import { Mocks, Theme } from '../../constants'
import { AntDesign } from "@expo/vector-icons"
import BgGradient from '../../components/BgGradient'

export default function Settings () {

  const profile = Mocks.profile
  
  return (
    <View style={styles.container}>
      
      <View style={styles.profile}>
        <View style={styles.profileAvatarContent}>
          <Image style={styles.profileAvatar} source={profile.avatar} />
          <BgGradient color01={Theme.Colors.EletricViolet} color02={Theme.Colors.DeepPink} style={styles.profileAvatarBackground} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>
            {profile.fname + " " + profile.lname}
          </Text>
          <Text style={styles.profileUsername}>
            #{profile.username}
          </Text>
        </View>
        <TouchableOpacity style={styles.editProfileBtn} activeOpacity={0.6}>
          <AntDesign style={styles.editIcon} name="edit" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.allContacts}>
        <AllContacts/>
      </View>

    </View>
  )
}