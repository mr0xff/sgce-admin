import { Button } from "react-native";
import { configPadrao } from "./estilo-css";

export default function Botao({title, onPress, disabled}){
    return (
    <Button 
        title={title} 
        color={configPadrao.corDoBotao} 
        onPress={onPress}
        disabled={disabled}
    />
    );
}