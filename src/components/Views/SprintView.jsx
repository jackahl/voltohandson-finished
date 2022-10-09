import React from 'react';
import { DefaultView } from '@plone/volto/components';
import { Container } from 'semantic-ui-react';
import moment from 'moment';

const SprintView = (props) => {
  const { content } = props;
  return (
    <Container>
      <p>
        From {moment(content.start).format('MMMM D, YYYY')} to{' '}
        {moment(content.start).format('MMMM D, YYYY')}
      </p>
      <DefaultView {...props} />
    </Container>
  );
};

export default SprintView;
