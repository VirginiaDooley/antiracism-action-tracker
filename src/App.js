import React from 'react';
import ActionList from './ActionList.js';
import './index.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: "fetching actions...",
      actions: []
    }
  }
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ actions: res.actions }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('http://localhost:1234');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log("this is:", body)
    return body;
  };

  render() {
    return (
        <ul className="uk-list">
          <ActionList actions={this.state.actions}/>
        </ul>
    );
  }
}

export default App;
