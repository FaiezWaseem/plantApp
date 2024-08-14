import { TouchableOpacity } from "react-native";
import Box from "../components/Box";
import Center from "../components/Center";
import Image from "../components/Image";
import Input from "../components/Input";
import Text from "../components/Text";
import ThemeButton from "../components/ui/ThemeButton";
import Color from "../utility/Color";
import { height } from "../utility/DptoPixels";
import { NavigationProps } from "../props/navigation-props";
import Routes from "../utility/Routes";

const splashBanner = require('../assets/login_plant.png')


export default function SplashScreen({ navigation }: NavigationProps) {


    const goToHome = () => navigation.reset({
        index: 0,
        routes: [{ name: Routes.HOME }],
    })


    return <Box flex bg={Color.white} >
        <Image
            source={splashBanner}
            width={'100%'}
            height={height('40')}
            style={{
                resizeMode: 'cover'
            }}
        />
        <Center p={10}>
            <Text color={Color.green} fontSize={38} fontWeight="bold" >Planta</Text>
        </Center>
        <Center p={10} >
            <Text color={Color.dark} w={'90%'} >Your Premier Destination for Lush Greenery: Elevate your space with our exceptional plant selection</Text>
        </Center>
        <Center p={10} >
            <Input placeholder="Email" w={'100%'} hintColor={Color.gray2} />
        </Center>
        <Center p={10} mt={10} mb={10} >
            <ThemeButton title="Login / Register" variant="primary" styles={{ width: "100%" }} onPress={goToHome} />
        </Center>
        <Center p={10} >
            <TouchableOpacity onPress={goToHome}>
                <Text color={Color.dark} style={{ textDecorationLine: 'underline', }}>Not Now</Text>
            </TouchableOpacity>
        </Center>

    </Box>
}


