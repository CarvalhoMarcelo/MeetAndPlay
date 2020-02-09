import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    txtResultado: {
        // backgroundColor: 'yellow',
        color: 'green',
        fontSize: 30,                
    },

    textItem: {
        color: 'yellow',
        fontSize: 20,
    },



    viewResultado: {
        borderColor: 'black',
        borderWidth: 5,
        alignItems: 'flex-end',
        backgroundColor: 'black',
        padding: 10,
    },

    viewItens: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'yellow',
        borderWidth: 5,
        padding: 10,
        justifyContent: 'space-between',
    },

    viewItem1: {
        display: 'flex',
        width: '50%',
        borderColor: 'green',
        borderWidth: 5,
        alignItems: 'center',
        backgroundColor: 'black',

    },

    viewItem2: {
        display: 'flex',
        width: '50%',
        borderColor: 'green',
        borderWidth: 5,
        alignItems: 'center',
        backgroundColor: 'black',
    }

    

});