import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

import styles from './styles'
import { AntDesign } from "@expo/vector-icons"
import { Theme } from '../../constants'

export default function Actions () {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.content} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingStart: Theme.Sizes.defaultSpace}}
      >
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="scan1" />
          </View>
          <Text style={styles.label}>Área Pix</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="barcode" />
          </View>
          <Text style={styles.label}>Pagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="upload" />
          </View>
          <Text style={styles.label}>Transferir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="hearto" />
          </View>
          <Text style={styles.label}>Doação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="barchart" />
          </View>
          <Text style={styles.label}>Investir</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="download" />
          </View>
          <Text style={styles.label}>Depositar</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="download" />
          </View>
          <Text style={styles.label}>Cobrar</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  )
}