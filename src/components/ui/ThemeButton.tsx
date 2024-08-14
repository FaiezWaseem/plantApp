import Button from "../Button";
import boostrap from "../../styles/boostrap";
import Color from "../../utility/Color";
interface ThemeButtonProps {
    title: string;
    onPress?: () => void;
    variant: 'primary' | 'secondary';
    styles?: Object,
}

const ThemeButton = ({ title, onPress, variant, styles }: ThemeButtonProps) => {
    return <Button
        onPress={onPress}
        color="white"
        txtStyle={{
            textAlign: 'center',
        }}
        style={{
            ...boostrap.btn,
            ...styles,
            backgroundColor: variant === 'primary' ? Color.dark : Color.green,
            borderColor: "#007bff",
        }}
    >{title}</Button>
}

export default ThemeButton
