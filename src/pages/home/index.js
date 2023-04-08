import React from "react";
import { Text, Box, VStack, Input, useToken, Pressable, FlatList, Image } from "native-base";
import { Logo } from "../../components/logo";
import {Ionicons} from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'
import api from "../../utils/api";

export function Home(){
    const [violet] = useToken('colors', ['violet.900'])

    function Card({data}){
        return(
          <Pressable h={"200px"} mb={"12px"} onPress={() => {alert(data.id)}}>
            
                <Image source={{uri:data.cover}} borderRadius={"5px"} alt="Strogonoff" size={"100%"}/>
                <Box 
                    position={'absolute'} 
                    zIndex={99}
                    bottom={14}
                    left={14}
                >
                    <Text fontSize={"lg"} fontWeight={'700'} color={'white.50'}>{data.name}</Text>
                    <Text fontSize={"md"} fontWeight={'400'} color={'white.50'}>{data.total_ingredients} ingredientes | {data.time} min</Text>
                </Box>
                <LinearGradient 
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: '55%',
                        borderRadius: 14,
                        zIndex: 9
                    }}
                    colors={['transparent','rgba(0,0,0,0.70)', 'rgba(0,0,0,0.95)']}
                />
     
          </Pressable>
        )
    }

    return(
        <Box pt={"12"} px={"18px"} bgColor={"violet.100"}>
            <VStack>
                <Logo/>
                
                <VStack mt={"16px"} >
                    <Text fontSize={"lg"} fontWeight={'700'} mb={'-5px'}>Encontre a receita</Text>
                    <Text fontSize={"lg"} fontWeight={'700'}>que combina com você</Text>
                </VStack>

                <Input
                    mt={"16px"}
                    w={"100%"}
                    h={"50px"} 
                    borderRadius={"5px"}
                    placeholder="digite o nome da comida"
                    borderColor={"violet.600"}
                    borderWidth={"2px"}
                    InputRightElement={
                        <Pressable onPress={() => alert('teste')} mr={"10px"}>
                            <Ionicons name="search" size={24} color={violet} />
                        </Pressable>
                    }
                >
                </Input>


            </VStack>
            <FlatList 
                    mt={"16px"}
                    h={"68%"}
                    data={api}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => <Card data={item} /> }
                />
        </Box>
    )
}