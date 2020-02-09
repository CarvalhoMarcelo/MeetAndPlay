import React, {Component} from 'react'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'

import MeuEstilo from '../Estilos/calcEstilo';

export default class Calculadora extends Component {

    // static navigationOptions = {
    //     title: 'Calculadora',
    // };


    state = {
        item1: 0,
        item2: 0,
        resultado: 0,        
    }

    calcular(){

    }

    render(){
        return (
            <>
                {/* View principal / container */}
                <View>


                    {/* Resultado da calculadora */}
                    <View style={MeuEstilo.viewResultado}>
                        <Text style={MeuEstilo.txtResultado}>
                            {/* onChangeText() = {
                                (txtItem1) => {
                                    
                                }
                            } */}
                            Resultado
                        </Text>                        
                    </View>
                    

                    {/* Campos para o calculo */}
                    <View style={MeuEstilo.viewItens}>
                        <View style={MeuEstilo.viewItem1}> 
                            <Text style={MeuEstilo.textItem}>
                                item1
                            </Text>                        
                        </View>
                        <View style={MeuEstilo.viewItem2}>
                            <Text style={MeuEstilo.textItem}>
                                item2
                            </Text>
                        </View>
                    </View>


                    {/* Botao para calcular  */}
                    <View>
                        <Button title="Calcular" color="red">
                            onPress() = { ()=> {
                                this.calcular();
                            }
                            }
                        </Button>
                        
                    </View>

                </View>
            </>
        )
    }



}