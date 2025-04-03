import React, { useState, useEffect } from "react";
import {  View, Text, Image, ScrollView, SafeAreaView, TextInput  } from 'react-native';
import api from "./src/service/api";
import globalStyles from './src/styles/globalStyles'

export default function App(){
  const [ filmes, setFilmes ] = useState([]);
  const [ pesquisa, setPesquisa ] = useState('');

  //Quando iniciar o site vai iniciar os dados
  useEffect(() => {
    async function carregarFilmes() {

      //trim remove os espaços antes de depois da escrita
      if(pesquisa.trim() !== ''){
        try{
          //Replace tira o espaço em branco(' ') e substitui por '%20'(espaço da linguagem sql)
          const response = await api.get(pesquisa.replace(' ', '%20'))
          setFilmes(response.data);
        }
        catch(error) {
          console.error('Deu erro!', error);
        }
      }
      else{
        setFilmes([]);
      }
    }   {/* ele para requisição aqui, não realizando varias requisições */}
    carregarFilmes()
  },    [pesquisa] )

  //Recebe um parametro com requisição de seta que esta setando setPesquisa
  //Pegamos o valor da caixa de texto e passa pra função que chamara ele
  const handlePesquisa = (texto) => {
    setPesquisa(texto);
  }

  return(
    <SafeAreaView style={globalStyles.container}>
      <TextInput style={globalStyles.input} placeholder="Digite o nome do filme"
      value={pesquisa} onChangeText={handlePesquisa}                            />
      <Text style={globalStyles.titulo}>
        Lista de Filmes
      </Text>

      <ScrollView contentContainerStyle={globalStyles.lista}>
        {filmes.map((filme) => (
          <View key={filme.show.id} style={globalStyles.card}>
            {filme.show.image && (
              <Image source={{ uri: filme.show.image.medium }} 
                     style={globalStyles.imagem} resizeMode="cover"  />
            )}
            <View style={globalStyles.infoContainer}>
              <Text style={globalStyles.tituloFilme} numberOfLines={1}>
                {filme.show.name}
              </Text>
              <Text style={globalStyles.url} numberOfLines={2}>
                {filme.show.url}
              </Text>
            </View>

          </View>
        ))};
      </ScrollView>

    </SafeAreaView>
  );
}