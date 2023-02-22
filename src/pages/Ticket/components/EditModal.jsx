import { DialogComponent } from '@syncfusion/ej2-react-popups';
const EditModal = ({ children, open, close }) => {
  return (
    <div className="App" id="dialog-target">
      <DialogComponent
        width={'900px'}
        isModal={true}
        target="#dialog-target"
        header={'Chỉnh sửa vé xe'}
        showCloseIcon={true}
        visible={open}
        close={close}
        overlayClick={close}
      >
        {children ?? 'abc'}
      </DialogComponent>
    </div>
  );
};
export default EditModal;
