import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Swipeout from 'react-native-swipeout'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0,
            isRightOpen: false
        }
    }

    _onOpen = () => {
        this.setState({
            activeRowKey: this.props.item.key
        })
    }

    _onClose = () => {
        if (this.state.activeRowKey != null) {
            this.setState({
                activeRowKey: null
            })
        }
    }

    _onLongPress = () => {
        this.setState({
            isRightOpen: true
        })
    }

    __scroll = () => {
        this.setState({
            isRightOpen: false
        })
    }

    render() {
        const { item } = this.props;

        const swipeSetting = {
            autoClose: true,
            onOpen: this._onOpen,
            onClose: this._onClose,

            left: [
                {
                    onPress: () => { },
                    component: (
                        <View style={styles.item}>
                            <View style={[styles.inItem, { backgroundColor: '#45B8AC' }]}>
                                <Icon name="camera" style={[styles.icon, { color: 'white' }]} />
                            </View>
                        </View>
                    ),
                    backgroundColor: 'white'
                },
                {
                    onPress: () => { },
                    component: (
                        <View style={styles.item}>
                            <Icon name="phone" style={styles.icon} />
                        </View>
                    ),
                    backgroundColor: 'white'
                },
                {
                    onPress: () => { },
                    component: (
                        <View
                            style={styles.item}
                        >
                            <Icon name="video" style={styles.icon} />
                        </View>
                    ),
                    backgroundColor: 'white'
                }
            ],
            right: [
                {
                    onPress: () => { },
                    component: (
                        <View style={styles.item}>
                            <Icon name="bars" style={styles.icon} />
                        </View>
                    ),
                    backgroundColor: 'white'
                },
                {
                    onPress: () => { },
                    component: (
                        <View style={styles.item}>
                            <Icon name="bell" style={styles.icon} />
                        </View>
                    ),
                    backgroundColor: 'white'
                },
                {
                    onPress: () => { },
                    component: (
                        <View style={styles.item}>
                            <View style={[styles.inItem, { backgroundColor: '#E94B3C' }]}>
                                <Icon name="trash" style={[styles.icon, { color: 'white' }]} />
                            </View>
                        </View>
                    ),
                    backgroundColor: 'white',
                }
            ],
            rowId: this.props.index,
            sextionId: 1
        }

        return (
            <Swipeout
                openRight={this.state.isRightOpen}
                backgroundColor='white'
                scroll={this.__scroll}
                {...swipeSetting}
            >
                <TouchableOpacity
                    onLongPress={this._onLongPress}
                >
                    <View style={styles.container}>
                        <View style={styles.bgAvatar}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text numberOfLines={1}>{item.description}</Text>
                        </View>
                        <View style={styles.bgSeen}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={styles.avatarSeen}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }
}

export default Item;