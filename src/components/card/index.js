import { Text, View } from 'react-native'
import { Card, Row } from 'native-base'
import Style from './style'
import Avatar from '../avatar'
import Star from '../../assets/star'

const CustomCard = ({ size, color, title }) => {
    return (
        <Card style={Style.containerCard}>
            <Row>
                <View style={Style.mr10}>
                    <Avatar width={50} height={50} borderRadius={25} name={'JL'} fontSize={18} />
                </View>
                <Text style={Style.fontStyle}>John Lennon</Text>
                <Star />
            </Row>
        </Card>
    )
}

export default CustomCard
