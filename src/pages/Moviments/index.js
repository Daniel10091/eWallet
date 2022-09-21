import React from 'react'
import { ScrollView, TouchableOpacity, View, Text } from 'react-native'

import styles from './styles'
import { Theme } from '../../constants'

import Chart from "../../components/Chart"
import HistoricMoviments from '../../components/HistoricMoviments'

export default function Moviments () {
  return (
    <View style={styles.container}>

      <Chart/>
      
      <ScrollView 
        style={styles.controls}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{paddingStart: Theme.Sizes.defaultSpace, paddingEnd: 5}}
      >
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Janeiro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Fevereiro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Março</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Abril</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Maio</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Junho</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Julho</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Agosto</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Setembro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Outubro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Novembro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Dezembro</Text>
        </TouchableOpacity>
      
      </ScrollView>

      <HistoricMoviments/>

    </View>
  )
}