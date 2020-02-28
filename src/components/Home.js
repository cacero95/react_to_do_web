import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            this.setState({
                posts:res.data.splice(0,10)
            });
        })
    }
    render(){
        const {posts} = this.state;
        const postList = posts.length ? (
            <div className="center">
            {posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">
                                    {post.title}
                                </span>
                            </Link>
                            <p>{post.body}</p>  
                        </div>
                    </div>
                )
            })}</div>
        ) : (
            <div className="center">
                <h3>No posts yet</h3>
            </div>
        );
        console.log(postList)
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
export default Home;