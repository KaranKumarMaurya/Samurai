import {View, StyleSheet, TouchableOpacity, Text,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React,{useEffect,useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Appbar,
  Card,
  Title,
  IconButton,
  Colors,
  Paragraph,
  AnimatedFAB,
} from 'react-native-paper';
import moment from 'moment';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';


const App = () => {
  const animatedScale=useRef(new Animated.Value(0)).current;
  const animatedScale2=useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    animatedScale.setValue(1);
    animatedScale2.setValue(1);

  }, []);
 
  // Top Arrow Button press Handler
  ////////////////////////////////
  const handleButtonPress=()=>{
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale,{
      toValue:1,
     // bounciness:1,
     // speed:0.5,
      useNativeDriver:true,
      
    }).start();
    console.log('Up Arrow pressed');
  }

  //Bottom Arrow Button Press Handler
  /////////////////////////////////
  const handleButton=()=>{
   animatedScale2.setValue(0.8);
    Animated.spring(animatedScale2,{
      toValue:1,
      //bounciness:0,
      //speed:0.5,
      useNativeDriver:true,
    }).start();
    console.log('Down Arrow pressed');
  }


  return (
    <LinearGradient colors={['#FF5733','#FF5733','#FF5733']} style={styles.linearGradient}>
      <Text style={styles.header}>Aid's Up</Text>
      <View style={styles.container}>

        {/* Connection Menu Button Design*/}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>console.log('connection menu button pressed')}>
            <View style={[styles.topCard]}>
              <Text style={{marginTop: 30,fontSize:18,color:'white',textAlign:'center'}}>Connection Menu</Text>
            </View>
        </TouchableOpacity>

        {/* Top Arrow Button Design */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleButtonPress}>
          <Animated.View style={[styles.topArrow,{transform:[{scale:animatedScale}]}]}>
            <View>
              <View style={styles.baseTop}/>
              <View style={styles.baseBottom} >
              <Text style={{fontSize:15,color:'white',textAlign:'center'}}>Up</Text>
              </View>
              
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Bottom Arrow Button Design */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleButton}>
          <Animated.View style={[styles.topArrow,{transform:[{scale:animatedScale2}]}]}>
            <View>
              <View style={styles.reverseTop}/>              
              <View style={styles.reverseBottom} >
                <Text style={{marginTop:45,fontSize:15,color:'white',textAlign:'center'}}>Down</Text>
                </View>
              
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Data History Button Design */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>console.log('data history button pressed')}>
         <View style={[styles.bottomCard]}>
              <Text style={{marginTop: 30,fontSize:18,color:'white',textAlign:'center'}}>Data History</Text>
            </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default App;
const styles = StyleSheet.create({
  linearGradient:{
    flex:1,
},
  header: {
    textAlign:'center',
    marginTop: 40,
    fontSize:25,
    fontWeight:'bold',
    color:Colors.white
    
  },
  topCard: {
    height: 100,
    width: 300,
    marginBottom: 100,
    borderRadius: 10,
    elevation: 4,
    alignItems: 'center',
    backgroundColor:'rgb(0, 150, 255)',
  },
  bottomCard: {
    height: 100,
    width: 300,
    marginTop: 100,
    borderRadius: 10,
    elevation: 4,
    alignItems: 'center',
    backgroundColor:'rgb(0, 150, 255)',
    
  },
  container: {
    alignItems: 'center',
    marginTop: 60,
  },
  baseTop: {
    borderBottomWidth: 70,
    borderBottomColor: 'rgb(0, 150, 255)',
    borderLeftWidth: 80,
    borderLeftColor: 'transparent',
    borderRightWidth: 80,
    borderRightColor: 'transparent',
    height: 0,
    width: 0,
    left: -39,
    top: -65,
    position: 'absolute',
    
  },
  baseBottom: {
    backgroundColor:'rgb(0, 150, 255)',
    height: 65,
    width: 80,
    alignItems: 'center',
   marginBottom: 100,
  },
  reverseTop: {
    borderLeftWidth: 80,
    borderLeftColor: 'transparent',
    borderRightWidth: 80,
    borderRightColor: 'transparent',
    borderTopWidth: 70,
    borderTopColor: 'rgb(0, 150, 255)',
    height: 0,
    width: 0,
    left: -41,
    top: 60,
    position: 'absolute',
    
  },
  reverseBottom: {
     backgroundColor:'rgb(0, 150, 255)',
    height: 65,
    width: 80,
    alignItems: 'center',
  },
});
