import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { CustomView } from '../../components/ui/CustomView';
import { Button, Title } from '../../components';
import { ThemeContext } from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {

  const { setTheme } = useContext( ThemeContext );

  return (
    <CustomView margin>
      <Title text={`Cambiar tema`} safe />

      <Button 
        text="Light"
        onPress={() => {  setTheme('light')}}
      />

      <View style={{ height: 10 }} />

      <Button 
        text="Dark"
        onPress={() => { setTheme('dark')}}
      />
    </CustomView>
  )
}