import React from 'react'
import { View, Text, Image } from 'react-native'



export const PostComponent = (props) => {
    const item = props.item
    return (
        <View style={{
            flex: 1,
            padding: 10
        }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold'
            }}>{item.author}</Text>
            <Text style={{
                fontSize: 17,
            }}>{item.title}</Text>
            <Image
                style={{
                    height: 250,

                    width: '100%',
                    backgroundColor: 'lightgrey'
                }}
                source={{
                    uri: item.url,
                }}
            />
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold'
            }}>{item.created_at}</Text>
        </View>
    )
}


