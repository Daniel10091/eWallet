import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'

import { AntDesign } from "@expo/vector-icons"
import styles from './styles'
import { Theme } from '../../constants'
import BgGradient from '../BgGradient'

import { Home, Scanner, Wallet, Settings, Moviments } from "../../pages"

export default function Navigator () {

  const [ currentTab, setCurrentTab ] = useState( "Home" )
  const [ currentPage, setCurrentPage ] = useState( Home )

  const TabButton = ( currentTab, setCurrentTab, icon, title, page ) => {
    return (
      <TouchableOpacity 
        style={styles.button} 
        onPress={ () => {
          setCurrentTab( title )
          setCurrentPage( page )
        } } 
        activeOpacity={0.6}
      >
        <AntDesign style={currentTab == title ? styles.buttonActiveIcon : styles.buttonIcon} name={icon} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      
      {/* Layout */}

      <ScrollView style={styles.layout} showsVerticalScrollIndicator={false}>
        {currentPage}
      </ScrollView>

      {/* Navigation */}

      <View style={styles.navigation}>

        {TabButton( currentTab, setCurrentTab, "home", "Home", Home )}

        {TabButton( currentTab, setCurrentTab, "barschart", "Barschart", Moviments )}

        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]} 
          onPress={ () => {
            setCurrentTab( "Scanner" )
            setCurrentPage( Scanner )
          } } 
          activeOpacity={0.6}
        >
          {/* <AntDesign style={[styles.buttonIcon, styles.primaryButtonIcon]} name="scan1" /> */}
          <AntDesign style={[styles.buttonIcon, styles.primaryButtonIcon]} name="qrcode" />
          <BgGradient color01={Theme.Colors.EletricViolet} color02={Theme.Colors.DeepPink} style={styles.buttonBackground} />
        </TouchableOpacity>

        {TabButton( currentTab, setCurrentTab, "wallet", "Wallet", Wallet )}

        {TabButton( currentTab, setCurrentTab, "setting", "Setting", Settings )}
      </View>
    </View>
  )
}