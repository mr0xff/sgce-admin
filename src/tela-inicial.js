import { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import estilo from './componentes-ui/estilo-css';
import Cabecalho from './componentes-ui/cabecalho';
import Botao from './componentes-ui/botao';
import axios from 'axios';

import { inserirDados, lerDados } from './utils/armzenamento-cache';

import { 
    useCameraPermission, 
    useCameraDevice, 
    Camera,
    useCodeScanner
} from 'react-native-vision-camera';


export default function TelaInicial(){
    const [ abrirCamera, setAbrirCamera ] = useState(false);

    const [ config, setConfig ] = useState();

    const [ resposta, setResposta ] = useState();

    useEffect(()=>{
        lerDados('@config')
        .then((configs)=>{
            if(configs){
                setConfig(configs);
            }else{
                Alert.alert('Servidor em Falta', 'Ajuste as configuração do servidor!');
            }
        });
    }, []);

    const { hasPermission, requestPermission } = useCameraPermission();
    const device = useCameraDevice('back');

    const http = axios.create({
        baseURL: config?.porta?`http://${config?.ip}:${config?.porta}/backend`:`http://${config?.ip}/backend`,
        headers: { "Content-Type" : "application/json"}
    });

    const codeScanner = useCodeScanner({
        codeTypes: ['qr'],
        onCodeScanned: (codes) =>{
            const { value } = codes[0];
            const dadosUsuario = JSON.parse(value);
            
            setAbrirCamera(false);
            if(config)
                if(dadosUsuario?.id)
                    http.post(`/api?id=${dadosUsuario.id}`, { id : 1 })
                    .then(({data})=>{
                        setResposta(data);

                        if(data.estado){
                            lerDados("@convidados").then((dados)=>{
                                console.log(dados)
                                if(!dados){
                                    inserirDados('@convidados', [dadosUsuario]);
                                }else{
                                    lerDados('@convidados')
                                    .then((convidados)=>{
                                        const copia = convidados;
                                        copia.push(dadosUsuario);
                                        inserirDados('@convidados', copia);
                                    });
                                }
                            })
                        }
                    });
                else{
                    Alert.alert(
                        'QrCode inválido!', 
                        "Este qrcode não foi gerado pela plataforma SGCE, portanto não poderá ser lido!"
                    );
                }
        }
    });

    const abrirCameraTraseira = ()=>{
        if (hasPermission){
            setAbrirCamera(!abrirCamera);
        }else
            requestPermission();
    };
   
    return(
        <View style={estilo.container}>
            <Cabecalho />
           { device && <Text style={estilo.corTexto}>Ler código QR do Convidado</Text>}
            
            {device ? 
             abrirCamera && 
             <Camera
                codeScanner={codeScanner}
                device={device}
                style={{
                    width: 200, 
                    height: 200,
                    marginVertical: 8,
                }}
                isActive={abrirCamera}
            />: <Text style={estilo.corTexto}>Sem camera disponível</Text>}

            {  resposta && 
                <Text style={estilo.textoCodigo}>
                    {resposta?.mensagem}
                </Text> 
            }
            
            <Botao 
                title={abrirCamera?"Fechar Camera":"Abrir Camera"}
                onPress={abrirCameraTraseira} 
                disabled={device?false:true} 
            />

        </View>
    );
}