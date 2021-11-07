import React from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

export const MenuBar = ({
  openHelp,
  uploadNewPdf,
  addDrawing,
  addText,
  addImage,
  isPdfLoaded,
  savingPdfStatus,
  savePdf,
}) => (
  <Menu pointing>
    <Menu.Item header>PDF Editor</Menu.Item>
    <Menu.Menu position="right">
      {isPdfLoaded && (
        <>
          <Dropdown item closeOnBlur icon="edit outline" simple>
            <Dropdown.Menu>
              <Dropdown.Item onClick={addText}>Add Text</Dropdown.Item>
              <Dropdown.Item onClick={addImage}>Add Image</Dropdown.Item>
              <Dropdown.Item onClick={addDrawing}>Add Drawing</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name={savingPdfStatus ? 'Saving...' : 'Save'}
            disabled={savingPdfStatus}
            onClick={savePdf}
          />
          <Menu.Item name="Upload New" onClick={uploadNewPdf} />
        </>
      )}
      <Menu.Item onClick={openHelp}>
        <Icon name="question circle outline" />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);
