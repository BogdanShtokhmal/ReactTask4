import React, {Component} from 'react';
import commentService from "../service/commentService";
import Comment from "../comment/Comment";

class AllComments extends Component {

    commentService= new commentService();
    state={comments:[]};

    async componentDidMount(){
        let comments= await this.commentService.comment();
        this.setState({comments})

    }
    render() {
        let {comments}=this.state;
        return (
            <div>
                {
                    comments.map(value=> <Comment item={value}/>)
                }
                    </div>

        );
    }
}

export default AllComments;