import { useState } from 'react';
import { TextInput, View, Text } from "react-native";
import estilo from "./estilo-css";

export default function InputTexto({
    onChangeText,
    textoFundo,
    rotulo,
    tipo,
    defaultValue
}){
    const [ focado, setFocado ] = useState(false);
    
    return(
        <View style={{width: '100%', paddingHorizontal: 7, marginVertical: 7}}>
            <Text style={[estilo.textoInput, focado && { fontWeight: '800' }]}>{rotulo}</Text>
            
            <TextInput
                keyboardType={tipo}
                placeholder={textoFundo?textoFundo:'Informe ...'}
                onChangeText={onChangeText}
                style={[estilo.inputTexto, focado && { borderBottomWidth: 2 }]}
                onFocus={()=>setFocado(true)}
                onBlur={()=>setFocado(false)}
                cursorColor={'indigo'}
                placeholderTextColor={'#0005'}
                maxLength={tipo == 'number-pad'? 5: 100}
                defaultValue={defaultValue}
            />
        </View>
    )
}