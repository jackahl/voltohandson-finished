import React from 'react';
import { DefaultView } from '@plone/volto/components';
import { Container } from 'semantic-ui-react';

const SprintView = (props) => {
  const { content } = props;
  return (
    <Container>
      <h2>{content.head_title}</h2>
      <DefaultView {...props} />
    </Container>
  );
};

export default SprintView;
