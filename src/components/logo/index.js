import React from "react";
import { Text, Box } from "native-base";

export function Logo(){
    return(
          <Box 
            bgColor={'violet.800'} 
            pl={"12px"} 
            pr={"40px"} 
            borderBottomRightRadius={"100px"} 
            borderBottomLeftRadius={"5px"}
            borderTopLeftRadius={"5px"}
            borderTopRightRadius={"5px"}
            maxWidth={"190px"}
          >
            <Text fontSize={'lg'} fontWeight={'700'} color={'white.50'}>Receita Fácil</Text>
          </Box>    
    )
}