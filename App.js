import TelaInicial from "./src/tela-inicial";
import TelaConfiguracao from "./src/tela-configuracao";
import TelaConvidados from "./src/tela-convidados";

import MenuRodape from "./src/componentes-ui/menu-rodape";
import { useState } from "react";
import AmbienteCompartilhado from "./src/utils/contexto-app";

const rotaTelas = [
  {
    id: 1,
    nome: 'Inicio',
    icone: 'home-outline',
    iconeAtivo: 'home'
  },
  {
    id: 3,
    nome: 'Convidados',
    icone: 'account-group-outline',
    iconeAtivo: 'account-group'
  },
  {
    id: 2,
    nome: 'Configurações',
    icone: 'hexagon-outline',
    iconeAtivo: 'hexagon'
  },
];

export default function App(){
  const [ tela, setTela ] = useState(1);

  return(
    <AmbienteCompartilhado.Provider value={[tela, setTela]}>
      { tela == 1 && <TelaInicial />}
      { tela == 2 && <TelaConfiguracao />}
      { tela == 3 && <TelaConvidados />}

      <MenuRodape 
        botaoMenu={rotaTelas}  
      />
    </AmbienteCompartilhado.Provider>
  );
}