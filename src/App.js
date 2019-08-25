import React from 'react';
import logo from './logo.svg';
import './App.css';
import {dummyAction, dummyCreator} from './action';
import {store} from './store';
import {connect} from 'react-redux';

store.dispatch (dummyAction);

console.log (store.getState ());

function mapStateToProps (state) {
  return {
    dummy: state.dummy,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onPress: text => {
      dispatch (dummyCreator (text));
    },
  };
}

export function App (props) {
  console.log (props.dummy);
  return (
    <div className="App">
      <button onClick={() => props.onPress ('Redux')}>Dispatch</button>
    </div>
  );
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
