import { StyleSheet } from "react-native";

export const configPadrao = {
    corDoFundo: "#ffffff",
    corDoTexto: "#000000",
    corDoBotao: "#2e0058"
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: configPadrao.corDoFundo
    },
    corTexto: {
        color: configPadrao.corDoTexto,
        fontSize: 18
    },
    cabecalho: {
        backgroundColor: configPadrao.corDoBotao,
        width: '100%',
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3
    },
    cabecalhoTexto: {
        fontSize: 20,
        fontWeight: '700',
        color: configPadrao.corDoFundo
    },
    textoCodigo: {
        backgroundColor: "#000",
        fontSize: 20,
        width: '80%',
        paddingVertical: 8,
        paddingHorizontal: 5,
        marginVertical: 7,
        color: configPadrao.corDoFundo,
        borderRadius: 7
    },
    menuRodape: {
        backgroundColor: configPadrao.corDoBotao,
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menuBotao: {
        width: '33%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoIcone: {
        color: "#fff9"
    },
    textoIconeAtivo: {
        color: "#fff",
        fontWeight: 'bold'
    },
    convidadoUI:{
        width: '100%',
        paddingVertical: '3%',
        paddingHorizontal: '3%',
    },
    inputTexto: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'indigo',
        color: '#000',
    },
    textoInput: {
        color: '#000',
        fontSize: 12,
        fontWeight: '600'
    }
});

export default estilo;