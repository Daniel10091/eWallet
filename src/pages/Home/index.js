import React from 'react'
import { View } from 'react-native'

import styles from './styles'

import { Mocks } from '../../constants'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Actions from '../../components/Actions'
import Contacts from '../../components/Contacts'
import Historic from '../../components/Historic'

export default function Home () {

  const balance = Mocks.balance
  
  return (
    <View style={styles.container}>
      <Header/>
      <Balance data={balance} />
      <Actions/>
      <Contacts/>
      <Historic/>
    </View>
  )
}