import React, { useState } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { BlurView } from "expo-blur"

import styles from './styles'
import { AntDesign } from "@expo/vector-icons"

export default function Balance ({ data }) {

  const [ showBalance, setShowBalance ] = useState(true)

  return (
    <View style={styles.container}>
      <BlurView intensity={100} tint="dark" style={styles.background}>
        <View style={styles.content}>
          <View style={styles.balance}>
            <Text style={styles.balanceTitle}>Balance</Text>
            <View style={styles.valueContent}>
              {
                showBalance ? (
                  <Text style={styles.balanceValue}>R$ {data.balanceValue}</Text>
                ) : (
                  <View style={styles.skeleton}></View>
                )
              }
            </View>
            <TouchableOpacity 
              style={styles.showBalance} 
              onPress={ () => {
                setShowBalance(!showBalance)
              } }
              activeOpacity={0.6}
            >
              <AntDesign style={styles.buttonIcon} name="eyeo" />
              {
                showBalance ? '' : (
                  <View style={styles.iconBar}></View>
                )
              }
            </TouchableOpacity>
          </View>
          <View style={styles.yield}>
            <Text style={data.type === 1 ? styles.yieldValue : styles.yieldExpenses}>
              {data.type === 1 ? `+${data.yieldValue}%` : `-${data.yieldValue}%`}
            </Text>
          </View>
        </View>
      </BlurView>
    </View>
  )
}