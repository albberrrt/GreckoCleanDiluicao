import { SetStateAction, useState, useEffect, useRef } from "react";
import { Center, HStack, VStack, Text, Image, Flex, Input } from "native-base";
import Animated, { Easing, withTiming, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import { Keyboard } from "react-native";

const AnimatedInput = Animated.createAnimatedComponent(Input);

export function Calculator() {
    const [volume, setVolume] = useState("");
    const checkVolumeLength = (parseFloat(volume) > 999999);

    const inputLength = volume.length * 14.87;

    const checkInputLength = (inputLength > 110);

    const widthOffset = useSharedValue(35);

    const config = {
        duration: 250,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      };

    const AnimatedStyle = useAnimatedStyle(() => {
        return{
            width: withTiming(widthOffset.value, config),
        }
    })


    const handleVolumeInputChange = (text: SetStateAction<string>) => {
       checkVolumeLength ? setVolume(volume.slice(0,-1)) : setVolume(text);
    }

        return(
            <Center pt={5}>
                <VStack alignItems="center" w="full" h="full">
                    <Image source={require('../assets/diluição.png')} alt="Grecko Clean" width={194} height={50} />
                    <Flex w="full" pt={8}>
                        <Text pl={5} fontFamily="regular" fontSize={18} color="greckoBlueGray.600">Insira o volume do recipiente:</Text>
                        <HStack justifyContent="center" alignItems="center" w="full">
                            <AnimatedInput
                            style={[AnimatedStyle]}
                            keyboardType="numeric" 
                            variant="underlined" 
                            placeholder="0" 
                            minWidth="25"
                            onFocus={() => widthOffset.value = checkInputLength ? inputLength : 110}
                            onBlur={() => {
                                widthOffset.value = (inputLength);
                                checkVolumeLength ? setVolume(volume.slice(0,-1)) : null;
                            }}
                            fontFamily="regular"
                            fontSize={18}
                            onChangeText={handleVolumeInputChange} 
                            value={volume} />
                            <Text fontFamily="regular" fontSize={18}>ml</Text>
                        </HStack>
                    </Flex>
                    <Text>{volume}</Text>
                </VStack>
            </Center>
    
        )
    }