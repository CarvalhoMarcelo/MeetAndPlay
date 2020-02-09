import React, {Component} from 'react';
import {ScrollView, View, Text, TextInput, Button} from 'react-native';
import MeuEstilo from '../Estilos/estilo';

export default class Cadastro extends Component {

    state = {
        texto: '',
        dados: [
            {nome: 'Marcelo', id: 1},
            {nome: 'Maria', id: 2},
            {nome: 'Fabiana', id: 3},
        ],
    }

    alteraEstado(valor) {
        this.state.texto = valor;
    }

    cadastraNome(valor) {         
        if(valor === ""){
            
        }
        let contador = this.state.dados.length;
        this.state.dados.push({nome: valor, id: contador + 1});
        this.setState(this.state.dados);                
    }

    render(){

        const {navigate} = this.props.navigation;
        return (
            <>
                <ScrollView>
                    <View>                
                        <Text style={MeuEstilo.titulo}>
                            {/* {this.props.MeuTitulo} */}
                            {/* Cadastro */}
                        </Text>
                    </View>

                    <View>
                        <Text 
                            style={MeuEstilo.contador}>Itens cadastrados: {this.state.dados.length}    
                        </Text>
                    </View>

                    <View>
                        <TextInput placeholder="Digite um novo item aqui"
                                    onChangeText = {
                                        (txtDigitado) => { 
                                            this.alteraEstado(txtDigitado)
                                        }
                                    }
                        >                        
                        </TextInput>
                    </View>    
                    {/* <Text>
                        {this.state.texto}
                    </Text> */}
                     <View>
                        <Button color="green" title="Cadastrar" 
                            onPress = {() => {this.cadastraNome(this.state.texto);}}
                        />                           
                    </View>            
                    <View>
                        <Button color="red" title="Ir para Calculadora" 
                            onPress = {
                                        () => {
                                            navigate('MinhaCalc')
                                        }
                                    }
                        />                           
                    </View>            

                    <View  style={MeuEstilo.ScrollReverse}>
                        {
                            this.state.dados.map((item)=>{
                                return <Text key={item.id} style={MeuEstilo.texto}>
                                            {item.id} - 
                                            {item.nome} 
                                        </Text>
                            })

                            

                        }
                    </View>
                </ScrollView>
            </>
        )
    }

}

