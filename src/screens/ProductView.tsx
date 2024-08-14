import { useEffect } from "react";
import Box from "../components/Box";
import Row from "../components/Row";
import Text from "../components/Text";
import Color from "../utility/Color";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Image from "../components/Image";
import { height } from "../utility/DptoPixels";
import Center from "../components/Center";
import ThemeButton from "../components/ui/ThemeButton";

export default function ProductViewScreen({ route }: any) {

    const { item } = route.params;

    useEffect(() => {
        console.log(item)
    }, [])

    return <Box flex bg={Color.white}>
        <Row e={2} bg={Color.white} p={5} h={50} justifyContent="space-between" alignItems="center" >
            <AntDesign name="arrowleft" size={24} color={Color.black} />
            <Text color={Color.black} >
                {item.title}
            </Text>
            <AntDesign name="shoppingcart" size={24} color={Color.black} />
        </Row>
        <Image source={require('../assets/preview.png')} width={'100%'} height={height('30')} />
        <Row p={8} style={{ gap: 5 }} >
            <Box bg={Color.green} p={6} pr={10} pl={10} rounded={8} >
                <Text color={Color.white} >{"Plant"}</Text>
            </Box>
            <Box bg={Color.green} p={6} rounded={8} pr={10} pl={10} >
                <Text color={Color.white} >{item.cat}</Text>
            </Box>
        </Row>
        <Row p={8}>
            <Text color={Color.green} fontWeight="bold" fontSize={22}  >{item.price}</Text>
        </Row>
        <Center p={8}>
            <Box w={'80%'} mb={8} >
                <Text color={Color.black} fontSize={20} >Details</Text>
                <Box w={'100%'} h={1} bg={Color.gray3} />
            </Box>
            <Box w={'80%'} mb={8} >
                <Row justifyContent="space-between" >
                    <Text color={Color.dark} fontSize={16} >Mass</Text>
                    <Text color={Color.dark} fontSize={16} >1kg</Text>
                </Row>
                <Box w={'100%'} h={1} bg={Color.gray3} />
            </Box>
            <Box w={'80%'} mb={8} >
                <Row justifyContent="space-between" >
                    <Text color={Color.dark} fontSize={16} >Origin</Text>
                    <Text color={Color.dark} fontSize={16} >Africa</Text>
                </Row>
                <Box w={'100%'} h={1} bg={Color.gray3} />
            </Box>
            <Box w={'80%'} mb={8} >
                <Row justifyContent="space-between" >
                    <Text color={Color.dark} fontSize={16} >Status</Text>
                    <Text color={Color.green} fontSize={16} >156 items left</Text>
                </Row>
                <Box w={'100%'} h={1} bg={Color.gray3} />
            </Box>
        </Center>
        <Center p={8}>
            <ThemeButton title="ADD TO CART" variant="secondary" styles={{ width: '80%' }} />
        </Center>
    </Box>
}