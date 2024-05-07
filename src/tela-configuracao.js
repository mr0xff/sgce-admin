import { View, Text, Alert } from 'react-native';
import estilo from './componentes-ui/estilo-css';
import Cabecalho from './componentes-ui/cabecalho';
import InputTexto from './componentes-ui/input';
import Botao from './componentes-ui/botao';
import { inserirDados, lerDados } from './utils/armzenamento-cache';
import { useEffect, useState } from 'react';

export default function TelaConfiguracao(){
    const [ config, setConfig ] = useState("");
    const [ ip, setIp ] = useState();
    const [ porta, setPorta ] = useState();

    const guardarConfigs = ()=>{
        inserirDados('@config', {ip, porta})
        .then(()=>Alert.alert('Configurção', 'As configurações foram salvas com sucesso!'));
    }

    useEffect(()=>{
        lerDados('@config')
        .then((configs)=>{
            if(configs){
                setIp(configs.ip);
                setPorta(configs.porta);
            }

            setConfig(configs);
        });
    }, []);

    return (
        <View style={estilo.container}>
            <Cabecalho />
            <Text style={estilo.corTexto}>Tela de configuração</Text>
            <InputTexto
                textoFundo="Informe o ip do servidor ..."
                rotulo="Ip do servidor"
                onChangeText={setIp}
                defaultValue={config?.ip}
            />

            <InputTexto
                textoFundo="Informe a porta do servidor ..."
                rotulo="Porta do Servidor"
                tipo="number-pad"
                onChangeText={setPorta}
                defaultValue={config?.porta}
            />

            <Botao
                title="Guardar"
                onPress={guardarConfigs}
            />
        </View>
    );
}