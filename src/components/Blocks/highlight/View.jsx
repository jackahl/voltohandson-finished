import React from 'react';
import { Container } from 'semantic-ui-react';
import ploneConfImg from './2022-ploneconf.png';

const HighlightView = (props) => {
  return (
    <div className="full-width">
      <div className="block highlight">
        <Container className="inner">
          <h1>Plone - The Ultimate Enterprise CMS</h1>
          <a href="https://2022.ploneconf.org">
            <img src={ploneConfImg} alt="2022 plone conf" />
          </a>
          <h2>Join the Plone Conference 2022 in Namur, Belgium!</h2>
          <a className="ui button" href="https://2022.ploneconf.org/tickets">
            Get your tickets now!
          </a>
        </Container>
      </div>
    </div>
  );
};

export default HighlightView;
