import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from "expo-camera"

import styles from './styles'

export default function Scanner () {

  // const [ type, setType ] = useState(CameraType.back)
  // // const [ hasPermission, setHasPermission ] = useState(null)
  // const [ permission, requestPermission ] = Camera.useCameraPermissions()

  // // useEffect(() => {
  // //   (async () => {
  // //     const { status } = await Camera.requestCameraPermissionsAsync()
  // //     setHasPermission(status === 'granted')
  // //   })()
  // // }, [])
  
  // // if (hasPermission === null) {
  // //   return <View/>
  // // }

  // // if (hasPermission === false) {
  // //   return <Text>Acesso negado!</Text>
  // // }
  
  // if (!permission) {
  //   return <View/>
  // }

  // if (!permission.granted) {
  //   return <Text>Acesso negado!</Text>
  // }
  
  // function toggleCameraType() {
  //   setType((current) => (
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   ))
  // }
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <Camera
        style={styles.camera}
        type={type}
      >
        <View style={styles.cameraControls}>
          <TouchableOpacity 
            style={styles.capture} 
            onPress={toggleCameraType} 
            activeOpacity={0.6} 
          >
            <Text style={{color: 'white'}}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera> */}
    </SafeAreaView>
  )
}