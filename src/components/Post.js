import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {
        id:null,
        body:'',
        title:''
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.post_id).then((res)=>{
            this.setState({
                id:res.data.id,
                body:res.data.body,
                title:res.data.title
            });
        })
    }
    render(){
        return(
            <div className="container">
                    <div className="post card">
                        <div className="card-content">
                        <span className="card-title">{this.state.title}</span>
                        <p>{this.state.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Posts;