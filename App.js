import React from 'react'
import TabNavigator from './navigation/TabNavigator'
import {NavigationContainer} from '@react-navigation/native'

export default class App extends React.Component{
  constructor(){
    super()
  }


render() {
  return(
    <NavigationContainer>
    <TabNavigator/>
    </NavigationContainer>
  )
}
}