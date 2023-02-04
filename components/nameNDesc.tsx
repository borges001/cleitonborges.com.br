import next from "next";
import { Text } from "@chakra-ui/react";


export default function NameNDesc (){
  return(
    <>
      <Text textStyle='userName'>
        Cleiton Borges
      </Text>
      <Text textStyle='bio'>
        Em Tech desde os 8 anos. <br/> Hoje planejo e executo estratégias de<br/>growth marketing.
      </Text>
    </>
  )
}