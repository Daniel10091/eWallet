import React from 'react'
import { TouchableOpacity, Text, Image, View, SafeAreaView } from 'react-native'

import styles from './styles'

export default function Contact ( props ) {

  const contactItem = (
    <SafeAreaView style={styles.container}>
      {props.contacts.map((contact) => 
        <TouchableOpacity style={styles.button} key={contact.id} activeOpacity={0.6}>
          <Image style={styles.avatar} source={contact.avatar} />
          <View style={styles.name}>
            <Text style={styles.nameContent}>{contact.fname + " " + contact.lname}</Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  )

  return (
    <View>
      {contactItem}
    </View>
  )
}