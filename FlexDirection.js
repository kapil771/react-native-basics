import React from 'react'
import { View } from 'react-native';

function FlexDirectionBasics(){
	return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'white'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      </View>
    );
}

export default FlexDirectionBasics;