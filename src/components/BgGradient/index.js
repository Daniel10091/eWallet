import React from 'react'
import { LinearGradient } from "expo-linear-gradient"

export default function BgGradient ( props ) {
  return (
    <LinearGradient 
      colors={[props.color01, props.color02]}
      start={[0, 1]}
      end={[1, 0]}
      location={[0.25, 0.4, 1]}
      style={props.style}
    />
  )
}