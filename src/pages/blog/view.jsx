import React from 'react';

/** 
 Describe component here.        
 React Component 
 */
class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {post: {}}
  }

  componentDidMount() {
    fetch(`/api/posts/view/${this.props.slug}`)
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({post: data.doc});
      })
      .catch((err) => {
        console.log(`something went wrong: ${err}`)
      });
  }

  render() {
    if (this.state.post) {
      return (
        <div>{this.state.post.body}</div>
      );
    } else {
      return (
        <div>No such post</div>
      )
    }
  }
}

export default View;