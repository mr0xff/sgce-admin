import AsyncStorage from '@react-native-async-storage/async-storage';

export const inserirDados = async (tabela, valor) => {
    try {
      const jsonValue = JSON.stringify(valor);
      await AsyncStorage.setItem(tabela, jsonValue);
    } catch (e) {
      // saving error
    }
};

export const lerDados = async (tabela) => {
    try {
      const jsonValue = await AsyncStorage.getItem(tabela);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
};
