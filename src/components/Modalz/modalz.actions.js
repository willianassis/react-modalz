export const modalzOpen = contentComponent => dispatch => {
  dispatch({ type: 'OPEN', payload: contentComponent });
}

export const modalzClose = () => dispatch => {
  dispatch({ type: 'CLOSE', payload: null });
}

export const modalzUpdate = updatedObj => dispatch => {
  dispatch({ type: 'UPDATE', payload: updatedObj });
}