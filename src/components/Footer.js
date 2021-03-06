import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// Footer css imports
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// Favicon imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGit, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF)
library.add(faLinkedinIn)
library.add(faGithub)
library.add(faTwitter)

class Footer extends Component {
  render() {
    return (
    <MDBFooter color="white text-dark" className="font-small pt-4 mt-4">
      <div className="text-center py-3">
        <h5 className="title center">Follow us on social media and Github!</h5>
            <a href="https://www.facebook.com/groups/TexasEWH/" target="_blank" className="pr-3 text-dark">Facebook |&nbsp;
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="http://www.linkedin.com/in/tewh" target="_blank" className="p-3 text-dark">Linkedin |&nbsp;
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a href="https://github.com/TEWH" target="_blank" className="p-3 text-dark">Github |&nbsp;
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="https://twitter.com/TexasEWH" target="_blank" className="p-3 text-dark">Twitter |&nbsp;
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
      </div>
      <div className="text-center py-3 text-dark">
        <MDBContainer fluid>
          Texas Engineering World Health
        </MDBContainer>
      </div>
    </MDBFooter>
    );
  }
}

export default Footer;
