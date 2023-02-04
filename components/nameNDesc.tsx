import next from "next";
import { Text } from "@chakra-ui/react";


export default function NameNDesc (){
  return(
    <>
      <Text textStyle='h1'>
        Cleiton Borges
      </Text>
      <Text textStyle='desc'>
        Em Tech desde os 8 anos. <br/> Hoje planejo e executo estratégias de growth marketing.
      </Text>
    </>
  )
}