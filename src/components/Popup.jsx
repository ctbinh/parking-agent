import { DialogComponent } from '@syncfusion/ej2-react-popups';
import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Popup = ({ children, header, width }) => {
  const { showPopup } = useStateContext();
  const { closePopup } = useStateContext();

  function onOverlayClick() {
    closePopup();
  }

  return (
    <>
      <div className="App" id="dialog-target">
        <DialogComponent
          width={width}
          isModal={true}
          target="#dialog-target"
          header={header}
          showCloseIcon={true}
          visible={showPopup}
          close={closePopup}
          overlayClick={onOverlayClick}
        >
          {children ?? 'abc'}
        </DialogComponent>
      </div>
    </>
  );
};

export default Popup;
