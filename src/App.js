import React, { Component } from 'react';
import './App.css';

import { Posts } from './components/Posts'
import { loadPosts } from './utils/load-posts';
class App extends Component {
  state = {
    posts: []
  }

  // Lifecycle methods
  // async componentDidMount() {
  //   await this.loadPosts();
  // }

  // loadPosts = async () => {
  //   const postsAndPhotos = loadPosts();

  //   this.setState({ posts: postsAndPhotos })
  // }
  // Lifecycle methods
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    
    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;