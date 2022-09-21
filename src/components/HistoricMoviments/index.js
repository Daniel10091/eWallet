import React from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from './styles'
import { Theme } from '../../constants'
import { AntDesign } from "@expo/vector-icons"
import ResultItem from './ResultItem'

export default function HistoricMoviments () {
  
  const transactions = [
    {
      id: 1,
      type: 'gain', // gain | loss
      title: 'Tansferência recebida',
      client: 'Elon Musk',
      value: '200000,00',
      date: '31 AGO',
    },
    {
      id: 2,
      type: 'loss', // gain | loss
      title: 'Tansferência efetuada',
      client: 'Panificadora Estânca',
      value: '5,00',
      date: '30 AGO',
    },
    {
      id: 3,
      type: 'gain', // gain | loss
      title: 'Tansferência recebida',
      client: 'Steve Jabs',
      value: '100000,00',
      date: '30 AGO',
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <AntDesign style={styles.searchIcon} name="search1" />
          <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={Theme.Colors.SonicSilver} />
        </View>
      </View>
      <View style={styles.resultsContainer}>
        <ResultItem data={transactions} />
      </View>
    </View>
  )
}