import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import DownloadData from './Data';
import View from './View';

const downloadLinkEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <View {...props} />
      <SidebarPortal selected={selected}>
        <DownloadData
          key={block}
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(downloadLinkEdit);
