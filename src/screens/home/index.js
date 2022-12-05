import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import { View, Text } from 'react-native'
import { Row, ChevronDownIcon, Actionsheet, useDisclose, Divider } from 'native-base'
import Style from './style'
import Header from '../../components/header'
import CustomCard from '../../components/card'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from "@shopify/flash-list"

const HomeScreen = observer(() => {
    const [selectedSort, setSelectedSort] = useState('Name')
    const [data, setData] = useState(['Data 1', 'Data 2', 'Data 3'])

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    return (
        <>
            <SafeAreaView style={Style.container}>
                <Header title={"John Lennon"} />

                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16 }}>
                    <View style={Style.containerBody}>
                        <Text style={Style.fontPlaceholder}>Owners List</Text>
                        <Row>
                            <Text style={Style.fontPlaceholder}>Sort By: </Text>
                            <Text style={Style.fontBlack} onPress={onOpen}>{selectedSort}</Text>
                            <View style={{ marginHorizontal: 5 }}>
                                <ChevronDownIcon />
                            </View>
                        </Row>
                    </View>

                    <FlashList
                        data={data}
                        renderItem={({ item }) => <CustomCard />}
                        ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
                        estimatedItemSize={data.length}
                        onEndReachedThreshold={500}
                    />

                    <Actionsheet isOpen={isOpen} onClose={onClose}>
                        <Actionsheet.Content>
                            <Actionsheet.Item onPress={() => {
                                onClose(),
                                    setSelectedSort('Name')
                            }}>Name</Actionsheet.Item>
                            <Actionsheet.Item onPress={() => {
                                onClose(),
                                    setSelectedSort('Cats')
                            }}>Number of cats</Actionsheet.Item>
                        </Actionsheet.Content>
                    </Actionsheet>
                </View>
            </SafeAreaView>
        </>
    )
})

export default HomeScreen
