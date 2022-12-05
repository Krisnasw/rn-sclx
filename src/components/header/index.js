import { View, Text } from 'react-native'
import { Row } from 'native-base'
import Avatar from '../avatar'
import Style from './style'

const Header = ({ title, hasBack = false }) => {
    return (
        <View style={Style.containerHeader}>
            <Row>
                <Avatar width={50} height={50} borderRadius={25} name={'JL'} fontSize={18} />
                <Text style={Style.headerFont}>Master: {title}</Text>
            </Row>
        </View>
    )
}

export default Header
