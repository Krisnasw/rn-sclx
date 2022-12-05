import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { observer } from 'mobx-react-lite'
import HomeScreen from '../screens/home'

const Stack = createStackNavigator()
export const navigationRef = React.createRef()

export function navigate({ ctx, params }) {
    navigationRef.current?.navigate(ctx, params)
}

export function replace({ ctx, params }) {
    navigationRef.current?.dispatch(StackActions.replace(ctx))
}

const Route = observer(() => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
})

export default Route
