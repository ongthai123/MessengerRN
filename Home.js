import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native'
import data from './data';
import Item from './Item';
import styles from './styles';

class Home extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.title}>
                    <Text style={styles.title}>My Crush</Text>
                </View>
                <FlatList
                    ref={"flatlist"}
                    data={data}
                    renderItem={({ item }) => (
                        <Item item={item} />
                    )}
                    keyExtractor={(item) => item.id}
                    parentFlatList={this}
                />
            </View>
        )
    }
}

export default Home;