import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Routes from './routes';
import * as ACTIONS from './store/actions/actions';

class App extends React.Component {
  
  render() {
    const text = 'text 1';
    return (
      <div>
        React
        <Routes/>
        <button onClick={() => console.log(this.props.stateprop1 , this.props.user_text)}>Show state</button>
        <button onClick={() => this.props.action1()}>Success</button>
        <button onClick={() => this.props.action2()}>Failure</button>
        <button onClick={() => this.props.action_creator_1()}>Action creator 1</button>
        <button onClick={() => this.props.action_creator_2()}>Action creator 2</button>
        <button onClick={() => this.props.action_creator_3(text)}>Action creator 3</button>
        { this.props.user_text ? <h1> { this.props.user_text } </h1> : null }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    user_text: state.user_reducer.user_text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator_1: () => dispatch(ACTIONS.success()),
    action_creator_2: () => dispatch(ACTIONS.failure()),
    action_creator_3: (text) => dispatch(ACTIONS.user_input(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
