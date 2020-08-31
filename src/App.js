import React from 'react';
// import Actions from './Actions.js';
import './index.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: "fetching data",
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
          {this.state.actions.map((action, index) =>
            <li key={index.toString()}>
              <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m">
              <div className="uk-card-badge uk-label">{action.badge}</div>
              <p className="uk-card-title">Action: {action.Title}</p>
              <a href="{action.Url}" className="uk-link-muted">{action.Url_title}</a>
              <p>Date added: {action.date_added}</p>
              <p>Deadline: {action.deadline}</p>
              <p id="status">Complete?: {action.Status}</p>
              <button className="uk-button uk-button-primary" name={action} value={action.Status}>COMPLETE</button>
              </div>
            </li>
          )}
        </ul>
    );
  }
}

export default App;
