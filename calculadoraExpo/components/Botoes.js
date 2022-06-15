import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import EstiloBotoes from './EstiloBotao';
import FuncoesBotao from './FuncoesBotao';

export default () => {
  return (
    <View>
      <div id="resp"></div>
      <Text style={EstiloBotoes.texto}>
      Teste{"\n"}Calc
      </Text>
      <View style={EstiloBotoes.botao}>
        <Button color="red" title="C" id='apagar'  />
        <Button title="( )" id='' />
        <Button title="%" id='' /> 
        <Button title="/" id='divisao' /> 
      </View>
      <View style={EstiloBotoes.botao}>
        <Button title="7" id='7' />
        <Button title="8" id='8' />
        <Button title="9" id='9' /> 
        <Button title="*" id='mult' />
      </View>
      <View style={EstiloBotoes.botao}>
        <Button title="4" id='' />
        <Button title="5" id='' />
        <Button title="6" id='' /> 
        <Button title="-" id='sub' />
      </View>
      <View style={EstiloBotoes.botao}>
        <Button title="1" onPress={parseInt} />
        <Button title="2" id='' />
        <Button title="3" id='' /> 
        <Button title="+" id='soma' />
      </View>
      <View style={EstiloBotoes.botao}>
        <Button title="+/-" id='' />
        <Button title="0" id='' />
        <Button title="," id='' /> 
        <Button color="green" title="=" id='igual' />
      </View>
    </View>
  );
}

