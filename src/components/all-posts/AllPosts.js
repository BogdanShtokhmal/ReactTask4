import React, {Component} from 'react';
import postService from "../service/postService";
import Post from "../Post/Post";


class AllPosts extends Component {

    postService= new postService();
    state={posts:[]};

async componentDidMount(){
    let posts= await this.postService.posts();
    this.setState({posts})

}


    render() {
        let {posts}=this.state;
        return (
            <div>
                {
                    posts.map(value => <Post item={value}/>)
                }
            </div>
        );
    }
}

export default AllPosts;