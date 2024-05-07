import { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import estilo from './componentes-ui/estilo-css';
import Cabecalho from './componentes-ui/cabecalho';
import { lerDados } from './utils/armzenamento-cache';
import ConvidadoUI from './componentes-ui/convidados-ui';

export default function TelaConvidados(){
    const [ convidados, setConvidados ] = useState();
    useEffect(()=>{
        lerDados('@convidados')
        .then(setConvidados)
    }, []);

    return(
        <View style={estilo.container}>
            <Cabecalho />

            { convidados && 
                <FlatList
                    data={convidados}
                    renderItem={ConvidadoUI}
                    keyExtractor={(item) => item.id}
                    style={{width: '100%', marginTop: '15%'}}
                /> 
            }
        </View>
    );
}