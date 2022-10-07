/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

import {
  HighlightBlockView,
  HighlightBlockEdit,
  DownloadLinkBlockEdit,
  DownloadLinkBlockView,
  eventListingTemplate,
  sprintView,
} from '@package/components';
import heroSVG from '@plone/volto/icons/hero.svg';
// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

export default function applyConfig(config) {
  // Add here your project's configuration here by modifying `config` accordingly
  config.blocks.requiredBlocks = [];
  config.blocks.blocksConfig.highlight = {
    id: 'highlight',
    title: 'Highlight',
    icon: heroSVG,
    group: 'common',
    view: HighlightBlockView,
    edit: HighlightBlockEdit,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.download = {
    id: 'download',
    title: 'Download',
    icon: sliderSVG,
    group: 'common',
    view: DownloadLinkBlockView,
    edit: DownloadLinkBlockEdit,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'eventListing',
      title: 'Events',
      template: eventListingTemplate,
    },
  ];

  config.views.contentTypesViews.sprint = sprintView;

  return config;
}
