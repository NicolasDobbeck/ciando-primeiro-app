import React from "react";
import {Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimeiroComponent, { SegundoComponent, TerceiroComponent } from "./components/VariosComponents";
import estilo from "./components/Estilo";
import Somar from "./components/Somar";

function App(){
  return(
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.textoPadrao}> Nicolas Dobbeck</Text>
      <PrimeiroComponent></PrimeiroComponent>
      <SegundoComponent></SegundoComponent>
      <TerceiroComponent></TerceiroComponent>
      <Somar num1 ={12} num2={30}/>
    </SafeAreaView>
  )
}

export default App
