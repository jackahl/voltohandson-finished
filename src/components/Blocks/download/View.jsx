import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';

const downloadLinkView = (props) => {
  const { data } = props;
  return (
    <div className="block download">
      <Container>
        <Grid columns={2}>
          <Grid.Column>
            <h2>{data.title}</h2>
            <p className="description">{data.description}</p>
          </Grid.Column>
          <Grid.Column>
            {data.buttonLink?.length > 0 && data.buttonTitle && (
              <UniversalLink
                href={data.buttonLink[0]['@id']}
                className="ui button"
              >
                {data.buttonTitle}
              </UniversalLink>
            )}
            <br />
            {data.otherLink?.length > 0 && data.otherLinkText && (
              <UniversalLink
                href={data.otherLink[0]['@id']}
                className="other-link"
              >
                {data.otherLinkText}
              </UniversalLink>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default downloadLinkView;
