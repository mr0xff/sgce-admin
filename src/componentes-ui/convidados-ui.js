import { Text, View } from 'react-native';
import estilo from './estilo-css';
export default function ConvidadoUI({ item: { nome } }){
    return(
        <View style={estilo.convidadoUI}>
            <Text style={{fontSize: 16, color: 'black'}}>{nome}</Text>
        </View>
    )
}