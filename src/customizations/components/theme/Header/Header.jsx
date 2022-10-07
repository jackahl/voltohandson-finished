/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Container, Segment, Dropdown, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Anontools, Logo, Navigation, Icon } from '@plone/volto/components';
import zoomSVG from '@plone/volto/icons/zoom.svg';

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <Segment basic className="header-wrapper" role="banner">
        <div className="top-header">
          <Container>
            <a href="https://2022.ploneconf.org">Conference</a>
            <a href="https://docs.plone.org">Documentation</a>
            <a href="https://training.plone.org">Training</a>
            <a href="https://community.plone.org">Forum</a>
            <a href="https://discord.com/invite/zFY3EBbjaj">Chat</a>
          </Container>
        </div>
        <Container>
          <div className="header">
            <div className="logo">
              <Logo />
            </div>
            <div className="nav-wrapper">
              <Navigation pathname={this.props.pathname} />
              <Dropdown text="More" pointing>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink to="/about-plone">About Plone</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/conferences">Conferences</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/donate">Donate</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/download">Download</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/features">Features</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/events">Events</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/news">News</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/providers">Providers</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/related">Related websites</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/security">Security</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/support">Support</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/newsroom">Newsroom</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/products">Products</NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="tools-search-wrapper">
                <div className="tools-search">
                  <NavLink to="/search" className="ui button search">
                    <Icon name={zoomSVG} size="18px" color="white" />
                    Search
                  </NavLink>
                </div>
                {!this.props.token && (
                  <div className="tools">
                    <Anontools />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
