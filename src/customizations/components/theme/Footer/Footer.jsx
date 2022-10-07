/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Logo, UniversalLink } from '@plone/volto/components';

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
                  <UniversalLink href="/about-plone">
                    Plone Foundation
                  </UniversalLink>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink href="/donate">
                      Donate & Sponsors
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/meeting">
                      Meeting minutes
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/board">Current board</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/board">
                      Foundation members
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/coc">Code of Conduct</UniversalLink>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <UniversalLink href="/support">Support</UniversalLink>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink href="/community/chat">
                      Chat room
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://community.plone.org/">
                      Forums
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/locals">
                      Local user groups
                    </UniversalLink>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <UniversalLink href="/downloads">Downloads</UniversalLink>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink href="/get-plone">Get Plone</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/addons">All add-ons</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/security">Security</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/hotfixes">
                      Check hotfixes
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://github.com/plone">
                      Browse source
                    </UniversalLink>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <UniversalLink href="https://docs.plone.org/">
                    Documentation
                  </UniversalLink>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink href="https://docs.plone.org/">
                      Full documentation
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://training.plone.org/">
                      Training
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="http://docs.plone.org/manage/installing/">
                      Installation
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://www.youtube.com/c/PloneCMS">
                      YouTube
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://www.linkedin.com/company/plone-foundation/">
                      Linkedin
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/about">About this site</UniversalLink>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <UniversalLink href="/contribute">Contribute</UniversalLink>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink href="/roadmap">Roadmap</UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/report-bugs">
                      Report bugs in Plone
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/security">
                      Report website issues
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="/skills">
                      Contribute skills
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://github.com/plone">
                      Contribute code
                    </UniversalLink>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List inverted>
                <List.Header>
                  <UniversalLink href="/contribute">
                    Stay up to date
                  </UniversalLink>
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink href="/newsletter">
                      Newsletter signup
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="http://planet.plone.org/">
                      Planet Plone (blogs)
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://twitter.com/plone">
                      @plone on Twitter
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://www.facebook.com/plonecms/">
                      PloneCMS on Facebook
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink href="https://www.linkedin.com/groups/2300">
                      Plone LinkedIn group
                    </UniversalLink>
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
                <UniversalLink href="https://plone.org/foundation/logo">
                  https://plone.org/foundation/logo
                </UniversalLink>
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
