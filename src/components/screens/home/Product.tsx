
import Box from "../../Box"
import Image from "../../Image"
import Text from "../../Text"
import Color from "../../../utility/Color"
import {  width } from "../../../utility/DptoPixels"
import { TouchableOpacity } from "react-native"
import { NavigationProps } from "../../../props/navigation-props"
import Routes from "../../../utility/Routes"
type Item = {
    title: string,
    image: any,
    price: string,
    cat: string,
}

interface ProductProps {
    item: Item
    navigation : NavigationProps
}

const Product = ({ item  , navigation}: ProductProps) => {
    
    const goToProductScreen = () =>  navigation.navigation.navigate(Routes.PRODUCTVIEW , { item })
    
    return <Box p={4}>
        <TouchableOpacity  onPress={goToProductScreen} >
            <Image source={item.image} width={width('45')} height={140} rounded={8} />
            <Text color={Color.black} fontSize={16} fontWeight="500" mt={3} mb={3} >{item.title}</Text>
            <Text color={Color.gray2}  >{item.cat}</Text>
            <Text color={Color.green} fontWeight="800" mt={3} mb={3} >{item.price}</Text>
        </TouchableOpacity>
    </Box>
}


export default Product