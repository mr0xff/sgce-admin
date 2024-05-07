import { useContext } from "react";

import { 
    View, 
    Text, 
    TouchableOpacity 
} from "react-native";

import estilo from "./estilo-css";

import AmbienteCompartilhado from "../utils/contexto-app";

import Icone from 'react-native-vector-icons/MaterialCommunityIcons'

export default function MenuRodape({
    botaoMenu,
}){
    const [ tela, setTela ] = useContext(AmbienteCompartilhado);

    return(
        <View style={estilo.menuRodape}>
            {botaoMenu.map(({id, nome, icone, iconeAtivo})=>
                <TouchableOpacity
                    onPress={()=>setTela(id)} 
                    key={id} 
                    style={estilo.menuBotao}>
                    <Icone 
                        name={id==tela?iconeAtivo:icone}
                        size={25}
                        color={id==tela?'#fff':"#fff9"}
                     />
                    <Text style={id==tela?estilo.textoIconeAtivo:estilo.textoIcone}>{nome}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}