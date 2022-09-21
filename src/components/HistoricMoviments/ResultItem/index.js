import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'

import styles from './styles'
import { Theme } from '../../../constants'
import { AntDesign } from "@expo/vector-icons"

export default function ResultItem ( props ) {
  
  const transactionItem = (
    <SafeAreaView>
      {props.data.map((transaction) => 
        <TouchableOpacity style={styles.item} key={transaction.id} activeOpacity={0.6}>
          <View style={styles.itemContainer}>
            <View 
              style={[styles.iconArea, transaction.type == "gain" ? {backgroundColor: 'hsla(112, 55%, 65%, 0.2)'} : {backgroundColor: 'hsla(0, 0%, 100%, 0.1)'}]}
            >
              <AntDesign 
                style={[styles.icon, transaction.type == "gain" ? {color: Theme.Colors.Green} : {color: Theme.Colors.Amaranth}]} 
                name={transaction.type == "gain" ? "download" : "upload"} 
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{transaction.title}</Text>
              <Text style={styles.client}>{transaction.client}</Text>
              <Text style={styles.value}>R$ {transaction.value}</Text>
            </View>
          </View>
          <View style={styles.itemDate}>
            <Text style={styles.date}>{transaction.date}</Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  )

  return (
    <View>
      {transactionItem}
    </View>
  )
}