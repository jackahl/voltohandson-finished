import React from 'react';
import { Grid } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

const eventTemplate = ({ items, moment: momentlib }) => {
  const moment = momentlib.default;

  return (
    <Grid columns={3}>
      <Grid.Column width={4}>
        <div className="text-col">
          <h2>
            <UniversalLink href="/events">Upcoming events</UniversalLink>
          </h2>
          <p>
            The Plone community regularly meets for sprints, conferences,
            training classes, and symposia.
          </p>
          <UniversalLink href="/add?type=Event" className="ui button">
            Add an event
          </UniversalLink>
          <br />
          <UniversalLink href="/add?type=Sprint" className="ui button">
            Add a sprint
          </UniversalLink>
          <br />
          <UniversalLink href="/add?type=News Item" className="ui button">
            Add a news item
          </UniversalLink>
          <br />
          <UniversalLink href="events" className="ui button">
            All events
          </UniversalLink>
        </div>
      </Grid.Column>
      <Grid.Column width={8} className="listing-col">
        <Grid columns={2}>
          {items.map((item) => (
            <Grid.Column width={5} className="item">
              <UniversalLink href={item['@id']}>
                <div className="date">
                  {moment(item.start).format('MMMM D, YYYY')}
                </div>
                <div className="item-body">
                  <h3>{item.title}</h3>
                  <p className="location">{item.location}</p>
                </div>
              </UniversalLink>
            </Grid.Column>
          ))}
        </Grid>
      </Grid.Column>
    </Grid>
  );
};

export default injectLazyLibs(['moment'])(eventTemplate);
