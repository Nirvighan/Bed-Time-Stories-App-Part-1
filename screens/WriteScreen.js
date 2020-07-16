import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WriteScreen extends React.Component
{
    render()
    {
        return(
            <View style = {{alignItems: 'center',
            justifyContent: 'center'}}>

                <Text style = {styles.text}>WELCOME TO WRITE SCREEN</Text>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    text:{

        
        fontSize:10,
        marginTop:200,
        
    }
})
