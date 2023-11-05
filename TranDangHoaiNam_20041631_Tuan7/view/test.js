import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function test() {
  return (
    <View style ={styles.continer}>
      <Text style ={{ fontSize: 50}}>Có cái con cặt </Text>
      <Pressable
      
      onPress={() => navigation.navigate("Detail")}
      style={{
          
        marginLeft: 10,
          width: '50% ',
          height: 54,
          backgroundColor: "red",
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
      }}
    > 
        <Text> 
          Nhấn vô đây đi 
        </Text>
      </Pressable>
    </View>



    
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
});