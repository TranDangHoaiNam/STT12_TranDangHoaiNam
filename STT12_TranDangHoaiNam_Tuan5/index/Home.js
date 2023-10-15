import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput, Pressable, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

// màn hình số 2 là 
export default function Home() {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
     
     <View style = {styles.header}>
      <Image source={require("./../assets/vs_blue.png")}style={{ width: 301, height: 361, marginTop: -2, marginLeft: 39 }}/>
     </View>

     <View style = {styles.section}>
        <View style = {styles.section_header}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng </View>
        <View style = {styles.section_article}>

          <View style = {styles.section_article_item1}>
            <Image source={require("./../assets/star.png")}   style ={{ width: 23, height: 25, marginTop: 10, marginLeft: 60}} />
            <Image source={require("./../assets/star.png")} style ={{ width: 23, height: 25, marginTop: 10, }} /> 
            <Image source={require("./../assets/star.png")} style ={{ width: 23, height: 25, marginTop: 10, }} /> 
            <Image source={require("./../assets/star.png")} style ={{ width: 23, height: 25, marginTop: 10, }} /> 
            <Image source={require("./../assets/star.png")} style ={{ width: 23, height: 25, marginTop: 10, }} /> 
            <View style = {styles.section_article_item11}>
            <Text style = {{marginTop: 10, marginLeft: 20, marginRight: 60, fontSize: 15, width: 400, fontStyle: 'Roboto'}}> (Xem 828 đánh giá)</Text>
            </View>
          </View> 

          <View  style = {styles.section_article_item2}> 
            <View >
            <Text style = {{marginTop: 10, marginLeft: 20, marginRight: 60, fontSize: 15, width: 99, height: 21, fontStyle: 'Roboto'}}> 1.790.000 đ</Text>
            </View>
            <View >
              <Text style = {{marginTop: 10, marginLeft: 20, marginRight: 60, fontSize: 15, width: 99, height: 21, fontStyle: 'Roboto',  textDecorationLine: 'line-through' }}> 1.790.000 đ</Text>
            </View>
          </View>
         
          <View  style = {styles.section_article_item3}>
            <Text style = {{marginTop: 10,  fontSize: 15, width: '55%', height: 14, fontStyle: 'Roboto', color: 'red', fontWeight: 'bold', marginLeft: 50}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image source={require("./../assets/Group_1.png")}   style ={{ width: 20, height: 20, marginTop: 10,marginLeft: -10}} />
          </View> 
          
          
          {/* bai text */}

        <View style={styles.section_footer}>
          <Pressable style = {{ width: '332px', height: '34px', backgroundColor: 'white', borderRadius: '10px',borderWidth: '2px', justifyContent: 'space-between', flexDirection: 'row', marginTop: '10px'}} 
          onPress={() => { navigation.navigate('DetaiScree')}} > 
              <Text style ={{textAlign: 'center', marginTop: 5, width: '70%', height: 50}} >4 Màu-Chọn Màu</Text>
              <Image source={require("./../assets/Vector.png")}   style ={{ width: 20, height: 10, marginTop: 10, marginRight: 20}} /> 
              
          </Pressable> 
        </View>  

        <View style={styles.footer}>
          <Pressable style = {{ width: '332px', height: '44px', backgroundColor: 'red', borderRadius: '10px', justifyContent: 'space-between', flexDirection: 'row', marginTop: '90px'}} 
          onPress={() => {  
          }} > 
              <Text style ={{textAlign: 'center', marginTop: 10, width: '100%', height: 50, color: 'white', fontSize: '20px', fontStyle: 'Roboto',}} >Chọn Mua</Text>
              
              
          </Pressable> 
        </View>  


      </View>
    </View>


        
      



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
   
    
  },
  header:{
    
  },
  section_header:{
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
  },
  section_article_item1:{
    flexDirection: 'row',
    width: '50%',
    
  },
  section_article: {
    
  },
  section_article_item2: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  section_article_item3: {
  flexDirection: 'row',

  },
  section_footer:{
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    
     
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});
