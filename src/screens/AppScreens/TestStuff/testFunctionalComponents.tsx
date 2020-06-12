import React, { useState, useEffect } from 'react';
import {Text, View, TextInput} from 'react-native';
import { Icon } from 'react-native-elements';

export default function ToDoList(){
    return(
        <>
        <Input/>
        </>
    )
}

 
function Input(){
    const [value, changeVal] = useState('')
    return(
        <TextInput 
        value={value}
        onChangeText={e => {
            changeVal(e)
        }}
        style={{height: 50, width: '80%', backgroundColor: '#f00', marginStart: 20, fontSize: 30}}
        />
    )
}