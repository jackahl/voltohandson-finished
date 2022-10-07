/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Logo } from '@plone/volto/components';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = () => {
  return (
    <>
      <Segment
        role="contentinfo"
        vertical
        padded
        inverted
        textAlign="center"
        id="footer"
      >
        <Container>
          <Grid textAlign="left" columns={6}>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <Link to="/about-plone">Plone Foundation</Link>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <Link to="/donate">Donate & Sponsors</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/meeting">Meeting minutes</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/board">Current board</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/board">Foundation members</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/coc">Code of Conduct</Link>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <Link to="/support">Support</Link>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <Link to="/community/chat">Chat room</Link>
                  </List.Item>
                  <List.Item>
                    <a href="https://community.plone.org/">Forums</a>
                  </List.Item>
                  <List.Item>
                    <Link to="/locals">Local user groups</Link>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <Link to="/downloads">Downloads</Link>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <Link to="/get-plone">Get Plone</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/addons">All add-ons</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/security">Security</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/hotfixes">Check hotfixes</Link>
                  </List.Item>
                  <List.Item>
                    <a href="https://github.com/plone">Browse source</a>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <a href="https://docs.plone.org/">Documentation</a>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <a href="https://docs.plone.org/">Full documentation</a>
                  </List.Item>
                  <List.Item>
                    <a href="https://training.plone.org/">Training</a>
                  </List.Item>
                  <List.Item>
                    <a href="http://docs.plone.org/manage/installing/">
                      Installation
                    </a>
                  </List.Item>
                  <List.Item>
                    <a href="https://www.youtube.com/c/PloneCMS">YouTube</a>
                  </List.Item>
                  <List.Item>
                    <a href="https://www.linkedin.com/company/plone-foundation/">
                      Linkedin
                    </a>
                  </List.Item>
                  <List.Item>
                    <Link to="/about">About this site</Link>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <Link to="/contribute">Contribute</Link>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <Link to="/roadmap">Roadmap</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/report-bugs">Report bugs in Plone</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/security">Report website issues</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/skills">Contribute skills</Link>
                  </List.Item>
                  <List.Item>
                    <a href="https://github.com/plone">Contribute code</a>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <Link to="/contribute">Stay up to date</Link>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <Link to="/newsletter">Newsletter signup</Link>
                  </List.Item>
                  <List.Item>
                    <a href="http://planet.plone.org/">Planet Plone (blogs)</a>
                  </List.Item>
                  <List.Item>
                    <a href="https://twitter.com/plone">@plone on Twitter</a>
                  </List.Item>
                  <List.Item>
                    <a href="https://www.facebook.com/plonecms/">
                      PloneCMS on Facebook
                    </a>
                  </List.Item>
                  <List.Item>
                    <a href="https://www.linkedin.com/groups/2300">
                      Plone LinkedIn group
                    </a>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
      <Segment id="sub-footer">
        <Container>
          <Grid columns={4}>
            <Grid.Column>
              <Logo />
            </Grid.Column>
            <Grid.Column>
              <p>
                The text and illustrations in this website are licensed by the
                Plone Foundation under a Creative Commons Attribution-ShareAlike
                4.0 International license.
              </p>
            </Grid.Column>
            <Grid.Column>
              <p>
                Plone and the Plone® logo are registered trademarks of the Plone
                Foundation, registered in the United States and other countries.
                For guidelines on the permitted uses of the Plone trademarks,
                see{' '}
                <a href="https://plone.org/foundation/logo">
                  https://plone.org/foundation/logo
                </a>
              </p>
            </Grid.Column>
            <Grid.Column>
              <p>All other trademarks are owned by their respective owners.</p>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </>
  );
};

export default Footer;
