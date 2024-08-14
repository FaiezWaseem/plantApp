import Box from "../../Box";
import Text from "../../Text";
import Color from "../../../utility/Color";
import { height } from "../../../utility/DptoPixels";
import { ImageBackground } from "react-native";
import Row from "../../Row";
import AntDesign from 'react-native-vector-icons/AntDesign'

const banner = require('../../../assets/bznner.png')

export default function Banner() {
    return <Box bg={Color.gray3} h={height('30')} w={'100%'} >
        <ImageBackground
            source={banner}
            style={{ width: '100%', height: '100%' }}
        >
            <Row p={10} justifyContent="space-between" alignItems="center">
                <Text color={Color.black} fontSize={20} fontWeight="400" w={'70%'} >Planta - shining your little space</Text>
                <Box rounded={10} bg={Color.white} p={10} >
                    <AntDesign name="shoppingcart" size={20} color={Color.black} />
                </Box>
            </Row>
            <Row p={10} >
                <Text color={Color.green} fontSize={16} fontWeight="600" >See New Arrivals <AntDesign name="arrowright" /> </Text>
            </Row>

        </ImageBackground>
    </Box>
}