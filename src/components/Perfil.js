import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/perfil.jpg')} style={styles.image} />
      </View>
      <Text style={styles.name}>Ana</Text>
      <View style={styles.row}>
        <Text style={styles.leftText}>Peso: 3.5 kg</Text>
        <Text style={styles.rightText}>Altura: 50 cm</Text>
      </View>
 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: '#88f2ed', // Cor de fundo para a área do nome, foto, peso e altura
      borderRadius: 10,
      padding:100,
      marginBottom: 20,
      width: '100%', 
    },
    backgroundContainer: {
        height:30,
        backgroundColor: '#88f2ed',
        position: 'absolute',
        top:0,
        left:0,
        right:0,
        zIndex:1,
        marginTop:10,
    },
    profileContainer: {
        flexDirection: 'row', // Alinha os itens horizontalmente
        justifyContent: 'space-between', // Empurra os itens para as extremidades
        alignItems: 'center',
        marginBottom: 10,
      },
  imageContainer: {
    position: 'absolute',
    top: 20, // Posição da margem superior para a imagem
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    position: 'absolute',
    top: 150, /*TAMANHO QUE FICA NA PARTE INFERIOR, ABAIXO DA FOTO*/
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 100, // Posição da margem superior para o texto do peso e altura
  },
  leftText: {
    marginLeft: 20,
    
  },
  rightText: {
    marginRight: 20,
  },
});

export default Perfil;





