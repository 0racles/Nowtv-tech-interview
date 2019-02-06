import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import MembersList from './components/MembersList';
import './App.css';
import { showMembersAction } from './redux/Actions/membersAction';

const store = configureStore();
store.dispatch(showMembersAction())

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	      <div className="AppContainer">
	      	<Header />
	      	<section>
	      		<MembersList />
	      	</section>
	      </div>
      	</Provider>
    );
  }
}

export default App;
