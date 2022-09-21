import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'

import styles from './styles'
import { Theme, Mocks } from '../../constants'
import BgGradient from '../BgGradient'

export default function Header () {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome back</Text>
        <Text style={styles.name}>{Mocks.profile.fname + " " + Mocks.profile.lname}</Text>
      </View>
      <TouchableOpacity style={styles.profileButton} activeOpacity={1}>
        <Image style={styles.buttonAvatar} source={Mocks.profile.avatar} />
      </TouchableOpacity>
      <BgGradient color01={Theme.Colors.EletricViolet} color02={Theme.Colors.DeepPink} style={styles.background} />
    </View>
  )
}