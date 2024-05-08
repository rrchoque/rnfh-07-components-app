import { View, Text } from 'react-native'
import React from 'react'
import { CustomView } from '../../components/ui/CustomView';
import { Button, Title } from '../../components';

export const ChangeThemeScreen = () => {
  return (
    <CustomView margin>
      <Title text={`Cambiar tema`} safe />

      <Button 
        text="Light"
        onPress={() => {}}
      />

      <View style={{ height: 10 }} />

      <Button 
        text="Dark"
        onPress={() => {}}
      />
    </CustomView>
  )
}