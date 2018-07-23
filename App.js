import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {  } from 'native-base';

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home',
  };
  render(){
    return(
      <View style={styles.container}>
        <Text>Home Route</Text> 
        <Button title="go to about" onPress={()=>{
          this.props.navigation.navigate('About');
        }}/>  
      </View>
    ); 
  }
} 
class AboutScreen extends React.Component{
  static navigationOptions = ({navigation})=>{
   return  {
    title: 'About '+navigation.getParam("count",1),
    headerTitleStyle: {
      marginLeft: 50,
    },
  }
}; 

  render(){
    const count = this.props.navigation.getParam("count",1);
    // const count=1;
    return(
      <View style={styles.container}>
        <Text style={styles.margin}>About Route : {count}</Text>   
        <View style={styles.margin}> 
          <Button title="about" onPress={()=>{
            this.props.navigation.push('About',{count:count+1});
          }}/> 
        </View>
        <View style={styles.margin}>
          <Button title="back" onPress={()=>{
            this.props.navigation.goBack();
          }}/> 
         </View>
         <View style={styles.margin}>
          <Button title="Home" onPress={()=>{
            this.props.navigation.navigate('Home');
          }}/> 
         </View>
      </View>
    );
  }
}

const Route=createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen
},{
  initialRouteName:'Home'
});
export default  class App extends React.Component {
  render() {
    return <Route/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin:{
    margin:10
  }
});
