import React from 'react';
import ReactMde from 'react-mde';
import * as Showdown from "showdown";
import 'react-mde/lib/styles/css/react-mde-all.css';
import * as Cookies from "es-cookie";

const NEW_POST_URL = '/posts/new';
function getCookieValue(a) {
  var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

export interface AppState {
  value: string;
}
/** 
 Describe component here.        
 React Component 
 */
class BlogNew extends React.Component<{}, AppState> {
  converter: Showdown.Converter;

  constructor(props) {
    super(props)
    this.loginToken = getCookieValue('lt');
    this.state = {
      title: this.props.title || '',
      category: this.props.category || '',
      tags: this.props.tags || [],
      body: this.props.body || '',
      abstract: this.props.abstract || '',
      mainImage: this.props.mainImage || ''
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    })
  }

  handleChange(field, value) {
    this.setState({[field]: value })
  }

  handleTagChange(value) {
    const tags = value.split(', ');
    this.setState({tags: tags});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(NEW_POST_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `JWT ${this.loginToken}`
      },
      body: JSON.stringify(
        {
          title: this.state.title,
          tags: this.state.tags,
          category: this.state.category,
          body: this.state.body,
          abstract: this.state.abstract,
          mainImageUrl: this.state.mainImageUrl,
          user: this.props.user.id
        }
      )

    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(msg => {
        console.log({error: msg})
      })
  }

  render() {

    return (
      <main>
        <section className="section">
          <div className="container">
            <h1>Create new blog</h1>

            <form onSubmit={this.handleSubmit.bind(this)} className="form">
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Post Title"
                    onChange={(event) => this.setState({title: event.target.value})}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Main Image</label>
                <div className="control">
                  <input
                    value={this.state.mainImage}
                    onChange={(event) => this.handleChange('mainImage', event.target.value)}
                    className="input" type="text" placeholder="main image" />
                </div>
              </div>
              <div className="field">
                <label className="label">Category</label>
                <div className="control">
                  <input
                    value={this.state.category}
                    onChange={(event) => this.handleChange('category', event.target.value)}
                    className="input" type="text" placeholder="Category" />
                </div>
              </div>
              <div className="field">
                <label className="label">Tags</label>
                <div className="control">
                  <input
                    value={this.state.tags.join(', ')}
                    onChange={(event) => this.handleTagChange(event.target.value)}
                    className="input"
                    type="text"
                    placeholder="Tags" />
                </div>
              </div>
              <div className="field">
                <label className="label">Abstract</label>
                <div className="control">
                  <textarea
                    value={this.state.abstract}
                    onChange={(event) => this.handleChange('abstract', event.target.value)}
                    className="textarea"
                    type="text"
                    placeholder="abstract" />
                </div>
              </div>
              <div className="field">
                <label className="label">Body</label>
                <div className="control">
                  <ReactMde
                    onChange={(value) => this.handleChange('body', value)}
                    value={this.state.body}
                    generateMarkdownPreview={markdown => 
                      Promise.resolve(this.converter.makeHtml(markdown))
                    }
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default BlogNew;
