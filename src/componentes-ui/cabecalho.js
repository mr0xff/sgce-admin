import { View, Text } from 'react-native';
import estilo from './estilo-css';

export default function Cabecalho(){
    return(
        <View style={estilo.cabecalho}>
            <Text style={estilo.cabecalhoTexto}>SGCE</Text>
            <Text style={{}}>Sistema de Gestão de Convites Electrónico</Text>
        </View>
    );
}