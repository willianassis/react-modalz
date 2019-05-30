const INITIAL = { 
  isOpen: false,
  content: null,
  onCancel: null,
  onConfirm: null,
  
  btnCancelText: 'Close',
  btnCancelClass: 'modalz-btn-error',
  
  btnConfirmText: 'Save',
  btnConfirmClass: 'modalz-btn-success'

};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case 'OPEN':
      return { ...state, isOpen: true, content: action.payload };
    case 'CLOSE':
      return { ...state, isOpen: false } ;
    case 'UPDATE': 
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
