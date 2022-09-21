import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { Theme } from '../../constants'

import styles from './styles'

export default function Card () {

  const scaleHeight = ({ source, desiredWidth }) => {
    const { width, height } = Image.resolveAssetSource(source)

    return desiredWidth / width * height
  }
  const imageSource = '../../../assets/card.png'
  const imageWidth = Dimensions.get('window').width - (Theme.Sizes.defaultSpace * 2)
  const imageHeigh = scaleHeight ({
    source: require(imageSource),
    desiredWidth: imageWidth
  })

  return (
    <View style={styles.container}>
      <Image style={[styles.card, {width: imageWidth, height: imageHeigh,}]} source={require(imageSource)} />
      <View style={styles.content}>
        <View style={styles.balanceContent}>
          <Text style={styles.balanceTitle}>Balance</Text>
          <Text style={styles.balanceValue}>$ 7595.00</Text>
        </View>
        <Text style={styles.percentage}>+16.78%</Text>
      </View>
    </View>
  )
}