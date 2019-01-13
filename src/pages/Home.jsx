import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faTwitter, faLinkedin, faSoundcloud, faBandcamp } from '@fortawesome/free-brands-svg-icons'
import Radium from 'radium';

const mainBioStyles = {
  padding: '40px 0'
};

const mainBioSocialStyles = {
  padding: '40px 0 20px'
};

const mainBioSocialLiStyles = {
  display: 'inline-block',
  padding: '0 10px',
  fontSize: '36px'
};

const mainBioSocialLinkStyles = {
  color: '#aaaaaa',
  ':hover': {
    color: '#666666'
  }
};

const socialLinks = [
  {url: "http://github.com/ingusmat", icon: faGithub},
  {url: "https://codepen.io/ingusmat/", icon: faCodepen},
  {url: "https://www.twitter.com/ingusmat", icon: faTwitter},
  {url: "https://www.linkedin.com/in/matthewburleson/", icon: faLinkedin},
  {url: "https://ingusmat.bandcamp.com", icon: faBandcamp},
  {url: "https://soundcloud.com/ingusmat/", icon: faSoundcloud}
];

/** 
 Describe component here.        
 React Component 
 */
class Home extends React.Component {
  state = {users: []};

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  /**
    Render the component
  */
  render() {
    var environment = process.env.NODE_ENV;
    console.log(environment);
    return (
      <main>
        <div className="columns" style={{marginBottom: 0}}>
          <div className="column is-half" style={{paddingBottom: 0}}>
            <img src="/ingus-basement-office.png" />
          </div>
          <div className="column is-half" style={{paddingBottom: 0}}>
            <div className="homepage-main-bio" style={mainBioStyles}>
              <h1 className="is-size-2 has-text-weight-bold">Ingus Mat Burleson</h1>
              <h2 className="is-size-4 has-text-grey-light has-text-weight-bold">Web Developer<br />Javascript Afficianado<br />Occasional Rocker and Roller</h2>
              <div className="homepage-main-bio-social">
                <ul>
                  {socialLinks.map((link, ind) => (
                    <li key={`socialLink_${ind}`} style={{...mainBioSocialLiStyles, paddingLeft: ind=== 0 ? 0 : 20}}>
                      <a key={`socialLink_${ind}_a`} href={link.url} style={mainBioSocialLinkStyles}>
                        <FontAwesomeIcon icon={link.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div style={{backgroundColor: '#58c0d8'}}>
          <div className="container">
            <p>Hi, I'm Ingus</p>
          </div>
        </div>
      </main>
    );
  }
}

export default Radium(Home);