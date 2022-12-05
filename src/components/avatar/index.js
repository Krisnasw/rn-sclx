import React from 'react'
import { View, Text } from 'react-native'

const Avatar = ({ width, height, borderRadius, name, fontSize }) => {
    return (
        <View style={{ borderColor: '#36A388', borderWidth: 2, width, height, borderRadius, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text style={{ fontSize, color: '#36A388', fontWeight: 'bold' }}>{name}</Text>
            </View>
        </View>
    )
}

export default Avatar
