# React-Modalz

Easy, fast, straight foward react/redux modal.

##### !!! This lib has Redux-Thunk as middleware dependency. !!!
#
### Installation
```sh
$ npm install react-modalz
$ yarn add react-modalz
```

### Usage example
import deps
> index.js
```sh
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'

const store = applyMiddleware(thunk)(createStore)(rootReducer)
```

Place the Modalz component at your 'root' so it can be called gloabally between all components.
> index.js
```sh
<Provider store={store}>
	<App />
</Provider>
```

> app.js
```sh
import React from 'react'
import { Modalz, ModalzActions } from 'react-modalz/lib'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function App(props) {
  return (
    <div className="App">
      <button onClick={() => props.modalzOpen(<Component userId={1} />)}>Open Modal</button>
      <Modalz />
    </div>
  );
}

function Component(props) {
  return (
    <div>
      Componente exemplo recebendo props {props.userId}
    </div>
  )
}

const mapState = state => ({ modalz: state.modalz })
const mapDispatch = dispatch => bindActionCreators({ modalzOpen: ModalzActions.modalzOpen }, dispatch)

export default connect(
  mapState,
  mapDispatch
)(App)
```

Finally in your rootReducer file
> rootReducer.js
```sh
import { combineReducers } from 'redux'
import { ModalzReducers } from 'react-modalz/lib'

export default combineReducers({
  modalz: ModalzReducers
})
```

### Redux Actions

| Action | Args | Ex: |
| ------ | ------ | ------ |
| modalzOpen | Component | props.modalzOpen(<Component {...compProps } />) |
| modalzClose | | props.modalzClose() |
| modalzUpdate | Object | props.modalzUpdate({ ... }) |

### modalzUpdate method
Here you can update the modal config. ex:

```sh
useEffect(() => {
    props.modalzUpdate({
      title: 'modal title here.'
    })
}, [])
```

| Prop | Type |
| ------ | ------ |
| isOpen | Boolean |
| content | Component |
| onCancel | Function |
| onConfirm | Function |
| btnCancelText | String |
| btnCancelClass | String |
| btnConfirmText | String |
| btnConfirmClass | String |