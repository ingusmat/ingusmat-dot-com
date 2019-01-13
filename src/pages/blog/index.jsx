import React from 'react';
import {Link} from "react-router-dom";

const POSTS_URL = '/api/posts/all/0/10';

/** 
 Describe component here.        
 React Component 
 */
class BlogIndex extends React.Component {
  state = {
    posts: null
  }

  componentDidMount() {
    fetch(POSTS_URL)
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({posts: data});
      })
      .catch((err) => {
        console.log(`something went wrong: ${err}`)
      });
  }

  Page(props) {
    return (
      <main>
        <section className="section">
          <div className="container">
            {props.children}
          </div>
        </section>
      </main>
    )
  }

  render() {
    if(!this.state.posts) {
      return (
        <main>
          It's a blog!
        </main>
      );
    }
    if(this.state.posts.docs) {
      return (
        <this.Page>
          <h1 className="is-size-3">It's a blog!</h1>
           {this.state.posts.docs.map(post => (
             <article key={post._id}>
               <h2 className="is-size-5">
                 <Link to={`/blog/${post.slug}`}>
                   {post.title}
                 </Link>
               </h2>
               <div>{post.abstract}</div>
               {post.tags.map(tag => (tag)).join(', ')}
               <p>Posted in {post.category} {post.user !== undefined && ` by ${post.user.username}`}</p>
             </article>
           ))}
        </this.Page>
      )
    } else {
      return (
        <main>
          There are no posts
        </main>
      )
    }
  }
}

export default BlogIndex;
