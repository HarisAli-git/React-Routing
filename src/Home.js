import React, { Component } from "react";
import Pokeball from './HighOrderComp/pokeball.png'
import { connect } from 'react-redux';

class Home extends Component{
    render () {
    const {posts} = this.props
    const postList = posts.length ? (
        posts.map(post => {
        return (  
            <div className="post card" key={post.id}>
                <img src={Pokeball} style={
                    {position: "absolute"},
                    {top: "20px"},
                    {left: "-100px"},
                    {opacity: "0.6"}
                }></img>
                <div className="card-content">
                <span className="card-title">{post.title} </span>
                    <span>{post.body}</span>
                </div>
            </div>
        )})
    ) : (
        <div className="center">No such posts to show!!!</div>
    );

    return (  
        <div className="container">
            <h1 className="center">Home</h1>
                <p>{postList}</p>
        </div>
    );
}
}
 
const MapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(MapStateToProps)(Home);