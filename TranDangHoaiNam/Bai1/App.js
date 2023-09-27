import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#C7F4F6', '#D1F4F6','#E5F4F5','#00CCF9']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.background}></LinearGradient>
      <View style = {{width: 142, height: 142,borderWidth: 15, borderRadius: 100, marginTop:69 }}>
      </View>
      <View style={{height:58,width:192,marginTop:62}}>
        <Text style={{fontSize:25,lineHeight:27,textAlign:'center'}}>GROW YOUR BUSINESS</Text>
      </View>
      <View style={{height:36,width:302,marginTop:70}}>
        <Text style={{fontSize:15,lineHeight:17.58,textAlign:'center'}}>We will help you to grow your business using online server</Text>
      </View>
      <View style={{marginTop: 60, height:48,width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{backgroundColor:'yellow',height:'100%',width:119,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontWeight:700,fontSize:20,lineHeight:23.44}}>LOGIN</Text>
            </View>
            <View style={{backgroundColor:'yellow',height:'100%',width:119,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontWeight:700,fontSize:20,lineHeight:23.44}}>LOGIN</Text>
            </View>
      </View>
  

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    flex: 1,
    alignItems: 'center',

  },
});
