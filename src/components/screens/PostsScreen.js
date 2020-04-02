import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getPostsList } from '../../redux/actions'

import { PostComponent } from '../reusable_comp/PostComponent';


class PostsScreen extends React.Component {

    state = {
        postsList: [],
        page: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.getPosts(this.state.page + 1)
        }, 1000)

    }

    render() {
        return (
            < View style={{
                flex: 1
            }}>
                <FlatList
                    data={this.state.postsList}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <PostComponent item={item} />
                            </View>
                        )
                    }}
                />
            </View >
        )
    }
    getPosts = async () => {
        const res = await this.props.getPostsList(this.state.page)
        if (res.success) {
            this.setState({
                postsList: res.success.postsList
            })
        }
    }

}



export default connect(null, { getPostsList })(PostsScreen);