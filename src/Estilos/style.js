import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#d6faeb',
        backgroundColor: '#000000',
        padding: 10
    },
    principal: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    formulario: {
        width: '100%',
        paddingTop: '30%',
        // height: '100%',
        // justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logotipo: {
        width: 200,
        height: 100,
        marginVertical: 15,
        borderRadius: 25,
    },
    campoTXT: {
        height: 50,
        width: '90%',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        fontSize: 20,
        // backgroundColor: 'blue',
        color: 'white',
        opacity: 0.8,
        borderRadius: 25,
        borderColor: '#dc9872',
        borderWidth: 3,


    },
    botaoLogin: {

        height: 50,
        width: '90%',
        marginTop: '30%',
        padding: 5,
        // backgroundColor: '#dc9872',
        borderRadius: 25,
        borderColor: '#dc9872',
        borderWidth: 3,
        alignItems: 'center',

    },
    textoLogin: {
        color: '#dc9872',
        fontSize: 25,
    },
    textoCabecalho: {
        color: '#dc9872',
        textAlign: 'center',
        fontSize: 30,
    },
    corBotoes: {
        backgroundColor: '#dc9872',
    },

});