import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getPostsList } from '../../redux/actions'

import { PostComponent } from '../reusable_comp/PostComponent';


class PostsScreen extends React.Component {
    state = {
        page: 0
    }

    componentDidMount() {
        this.getPosts(this.state.page)
    }

    render() {
        return (
            < View style={{
                flex: 1
            }}>
                <FlatList
                    data={this.props.postsList}
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
    }
}

const mapStateToProps = (state) => {
    return {
        postsList: state.postsList
    }
}



export default connect(mapStateToProps, { getPostsList })(PostsScreen);