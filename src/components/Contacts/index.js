import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

import Contact from './Contact'

import { AntDesign } from "@expo/vector-icons"
import styles from './styles'
import { Mocks, Theme } from '../../constants'
import BgGradient from '../BgGradient'

export default function Contacts () {

  const contact = Mocks.users

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar dinheiro para</Text>
      <ScrollView 
        style={styles.list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingStart: Theme.Sizes.defaultSpace}}
      >
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.addContact} activeOpacity={0.6}>
            <View style={styles.iconArea}>
              <AntDesign style={styles.icon} name="plus" />
              <BgGradient color01={Theme.Colors.EletricViolet} color02={Theme.Colors.DeepPink} style={styles.iconBackground} />
            </View>
            <View style={styles.label}>
              <Text style={styles.labelContent}>adicionar novo contato</Text>
            </View>
          </TouchableOpacity>
          <Contact contacts={contact} />
        </View>
      </ScrollView>
    </View>
  )
}