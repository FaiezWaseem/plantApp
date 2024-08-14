import Box from "../components/Box";
import Image from "../components/Image";
import Banner from "../components/screens/home/Banner";
import { NavigationProps } from "../props/navigation-props";
import Color from "../utility/Color";
import { ScrollView, StatusBar, } from "react-native";
import { height } from "../utility/DptoPixels";
import Text from "../components/Text";
import MasonryList from '@react-native-seoul/masonry-list';
import Row from "../components/Row";
import { equipments, plants } from "../data";
import Center from "../components/Center";

import Product from "../components/screens/home/Product";


export default function HomeScreen({ navigation }: NavigationProps) {
    return <Box flex p={0}  >
        <StatusBar backgroundColor={Color.gray3} />
        <ScrollView style={{ flex: 1, backgroundColor: Color.white }}>
            <Banner />
            <Row p={8} mt={15} mb={15} >
                <Text color={Color.black} fontSize={22} fontWeight="600" w={'70%'} >Plants</Text>
            </Row>
            <MasonryList
                style={{ flex: 1, backgroundColor: Color.white }}
                data={plants}
                keyExtractor={(item, index): string => index.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item } : {item : any}) => (
                    <Product item={item} navigation={{navigation}} />
                )}
                ListFooterComponent={<Row p={8} h={50} justifyContent="flex-end"  >
                    <Text color={Color.black} style={{ textDecorationLine: 'underline', }} >See More</Text>
                </Row>}
                onEndReachedThreshold={0.1}

            />
            <Row p={8} mt={1} mb={15} >
                <Text color={Color.black} fontSize={22} fontWeight="600" w={'70%'} >Equipments</Text>
            </Row>
            <MasonryList
                style={{ flex: 1, backgroundColor: Color.white }}
                data={equipments}
                keyExtractor={(item, index): string => index.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item } : {item : any}) => (
                    <Product item={item} navigation={{navigation}} />
                )}
                ListFooterComponent={<Row p={8} h={50} justifyContent="flex-end"  >
                    <Text color={Color.black} style={{ textDecorationLine: 'underline', }} >See More</Text>
                </Row>}
                onEndReachedThreshold={0.1}
            />

            <Row p={8} mt={1} mb={15} >
                <Text color={Color.black} fontSize={22} fontWeight="600" w={'70%'} >Planta Care Kit (new)</Text>
            </Row>
            <Center mb={16}>
                <Row w={'80%'} bg={Color.gray3} h={height('15')} rounded={8} >
                    <Box w={'60%'} p={5} > 
                        <Text color={Color.black} fontSize={16} fontWeight="600" >Lemon Balm Grow Kit </Text>
                        <Text color={Color.gray2} >Include: Lemon Balm seeds, dung, Planta pot, marker. </Text>
                    </Box>
                    <Image source={require('../assets/plant-kit.png')} width={'40%'} height={'100%'} rounded={8} />
                </Row>
            </Center>
        </ScrollView>
    </Box>
}