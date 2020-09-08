import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import LembreteItem from './components/LembreteItem';
import LembreteInput from './components/LembreteInput';

export default function App() {

  /*const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  }
  const [lembrete, setLembrete] = useState('');*/
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);
  
  

  const adicionarLembrete = (lembrete) => {
    //console.log(lembrete);
    setLembretes(lembretes => {
      setContadorLembretes(contadorLembretes + 1);
      return [...lembretes, {key: contadorLembretes.toString(), value:lembrete}]
    });
  }

  const removerLembrete = (keyASerRemovida) => {
    setLembretes(lembretes => {
        return lembretes.filter((lembrete) => {
          return lembrete.key !== keyASerRemovida
        });
    });
  }

  return (
    <View style={styles.telaPrincipalView}>
      <LembreteInput  
          onAdicionarLembrete={adicionarLembrete}
      />

      
      <FlatList 
        data={lembretes}
        renderItem={
          (lembrete) => (
            <LembreteItem 
              chave={lembrete.item.key}
              lembrete={lembrete.item.value} 
              onDelete={removerLembrete}
            />
          )
        }
      />

      {/* utilizado dessa forma se não houver componentes
         <FlatList 
            data={lembretes}
          renderItem={
            (lembrete) => (
              <View style={styles.itemListaView}>
                <Text>{lembrete.item.value}</Text>
              </View>
            )
          }
        />
      */}
      {/*lembretes serão exibidos aqui
      <ScrollView>
        {lembretes.map((lembrete) => (
          <View style={styles.itemListaView} key={lembrete}>
            <Text>{lembrete}</Text>
          </View>
        ))}
      </ScrollView>
      */}
      
    </View>
  );
}

const styles = StyleSheet.create({

  itemListaView: {
    padding: 12,
    backgroundColor: '#ddd',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
  entradaView: {
    marginBottom: 8,
  },
  telaPrincipalView: {
    padding: 50
  },
  lembreteTextInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4,
    padding: 12, 
    textAlign: 'center'
  }
});
