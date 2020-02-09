import React from 'react';
import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Cadastro from './src/Telas/Cadastrar';
import Login from './src/Telas/Login';
import MultiBar from './src/Componentes/MultiBar';
import MultiBarToggle from './src/Componentes/MultiBarToggle';
import Calculadora from './src/Telas/Calculadora';

const TabNavigator = createBottomTabNavigator
(
  {
    Login: {
      screen: Login,
      navigationOptions: ()=> ({
        tabBarIcon: ({tintColor})=> <Icon name="lock" size={34} color="green"></Icon>
      })
    },
    // MultiBar: {
    //   screen: ()=> null,
    //   navigationOptions: ({navigation})=> ({
    //       tabBarIcon: ()=> (
    //           <MultiBarToggle
    //               navigation={navigation}
    //               actionSize={30}
    //               routes={[
    //                   {
    //                       routeName: routes.Calculadora,
    //                       color: '#FF8360',
    //                       icon: (
    //                           <Icon
    //                               name="rocket"
    //                               color="#333333"
    //                               size={15}
    //                           />
    //                       )
    //                   },
    //                   {
    //                       routeName: routes.Calculadora,
    //                       color: '#E8E288',
    //                       icon: (
    //                           <Icon
    //                               name="dashboard"
    //                               color="#333333"
    //                               size={15}
    //                           />
    //                       )
    //                   },
    //                   {
    //                       routeName: routes.Calculadora,
    //                       color: '#7DCE82',
    //                       icon: (
    //                           <Icon
    //                               name="gears"
    //                               color="#333333"
    //                               size={15}
    //                           />
    //                       )
    //                   },
    //               ]}
    //               icon={(
    //                   <Icon
    //                       name="plus"
    //                       color="#FFFFFF"
    //                       size={24}
    //                   />
    //               )}
    //           />
    //       )
    //   }),
    //   params: {
    //       navigationDisabled: true
    //   }
    // },
    Cadastro: {
      screen: Cadastro,
      navigationOptions: {
        tabBarIcon: ()=> <Icon name="users" size={34} color="blue"></Icon>
      }
    },
          
  },
  {
    tabBarComponent: MultiBar,
    tabBarOptions:{
      activeTintColor: 'red',
      showLabel: true,
      // activeBackgroundColor: 'black',
      // inactiveBackgroundColor: 'black',
      style: {
        backgroundColor: '#171F33', // TabBar background
    },
      
    }
  }
)
export default createAppContainer(TabNavigator)
