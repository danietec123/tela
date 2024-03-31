/* TouchableWithoutFeedback : sem visual para o usuario,*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';
/*importando Ant+enty para utilizar como icon, funcao animated, anima o botao*/
import {AntDesign, Entypo} from '@expo/vector-icons'


export default class FabButton extends Component {
  animation = new Animated.Value(0);
/*criando a funcao togglemenu,    const toValue para abir e fecha, coloca os valores  0 e 1 pois se for 0 ele vai abrir senao ele fecha os botoes*/
  toggleMenu = () =>{
    const toValue = this.open ? 0 : 1
    Animated.spring(this.animation,{
      toValue,
      friction: 6,     
    }).start();
    this.open = !this.open;
  }
  render(){
    /*crianda a funca para subir os botoes de registro, translateY, outputrange vai fica encima*/
      const heartStyle={
        transform:[
          {scale:this.animation},
          {
            translateY: this.animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-80]
            })
          }
        ]
      }
    
      const moonStyle={
        transform:[
          {scale:this.animation},
          {
            translateY: this.animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-140]
            })
          }
        ]
      }
      const drinkStyle={
        transform:[
          {scale:this.animation},
          {
            translateY: this.animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-200]
            })
          }
        ]
      }
    
      const rulerStyle={
        transform:[
          {scale:this.animation},
          {
            translateY: this.animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-255]
            })
          }
        ]
      }



    /*criando a funcao para o botao de + abrir e fecha*/
    const rotation ={
      transform:[
        {
          rotate: this.animation.interpolate({
            inputRange:[0,1],
            outputRange:["0deg", "45deg"]
          })
        }
      ]
    }
  return(
    /*criando os botoes*/
    /*acessando atraves do this.props.style feito no fabbutton no app.js//*/
    /*a funcao TouchableWithoutFeedback ele ta criando o botao na parte de baixo da taela*/
    <View style={[style.container, this.props.style]}>
      <TouchableWithoutFeedback onPress={()=> alert ('Faça o registro do comprimento do seu baby')}> 
       <Animated.View style={[style.button, style.submenu,rulerStyle]}>
      <Entypo name= "ruler" size={20} color={"#FFF"}/>
      </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=> alert ('faça o registro da alimentação do seu baby')}> 
       <Animated.View style={[style.button, style.submenu,drinkStyle]}>
       <Entypo name="drink" size={24} color="#FFF" />
      </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=> alert ('Faça o registro do sono do seu baby')}> 
       <Animated.View style={[style.button, style.submenu, moonStyle]}>
       <Entypo name="moon" size={24} color="#FFF"  />
      </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=> alert ('Faça o registro da saude do seu baby')}> 
       <Animated.View style={[style.button, style.submenu,heartStyle]}>
      <AntDesign name= "heart" size={24} color={"#FFF"}/>
      </Animated.View>
      </TouchableWithoutFeedback>

      
      <TouchableWithoutFeedback onPress={this.toggleMenu} >
       <Animated.View style={[style.button, style.menu, rotation]}>
      <AntDesign name= "plus" size={24} color={"#FFF"}/>
      </Animated.View>
      </TouchableWithoutFeedback>

    </View>
  );
}
}
/*utilizei o onpress para quando clicar encima do botao + aparecer as opçoes*/
const style = StyleSheet.create({
  container:{
    alignItems:'center',
    position: 'absolute'
  },
/*criando o estilo do botao*/
button:{
position:'absolute',
width: 60,
height:60,
borderRadius: 60 / 2,
justifyContent:'center',
alignItems:'center',
shadowRadius:10,
shadowColor:'#00213B',
shadowOpacity:0.3,
shadowOffset:{
  height: 10,
}
},
menu:{
  backgroundColor:'#00213B'
},
/*criando o estilo do submenu, as opçoes para registro*/
submenu:{
  width:48,
  height:48,
  borderRadius: 48 / 2,
  backgroundColor:'#00213B'
}
});


