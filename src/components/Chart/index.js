import React from 'react'
import { Dimensions, View } from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit"
import { Theme } from '../../constants'

import styles from './styles'

export default function Chart () {
  return (
    <View style={styles.container}>
      <View style={styles.graphicContainer}>
      <LineChart
        data={{
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width - 30} // from react-native
        height={240}
        yAxisLabel="R$"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: Theme.Colors.EerieBlack02,
          backgroundGradientFrom: Theme.Colors.EerieBlack02,
          backgroundGradientTo: Theme.Colors.EerieBlack03,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: Theme.Colors.DeepPink,
          }
        }}
        bezier
        style={{
          borderRadius: 14,
        }}
      />
      </View>
    </View>
  )
}