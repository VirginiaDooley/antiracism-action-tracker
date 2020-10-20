import React, { useState, useEffect } from 'react';

function App() {
  const [ actions, setActions ] = useState([])

  const getActions = async () => {
    const response = await fetch('http://localhost:1234');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getActions() 
      .then(data => {
        setActions(data.actions)
      })
  }, [])

  return (
    <div>
      <ul>
       {actions.map(item => 
        <li key={item.Title} className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-margin-top uk-margin-bottom">
          <div className="uk-card-badge uk-label">{item.badge}</div>
          <p className="uk-card-title">Action: {item.Title}</p>
          <a href="{item.Url}" className="uk-link-muted">{item.Url_title}</a>
          <p>Date added: {item.date_added}</p>
          <p>Deadline: {item.deadline}</p>
          <button className="uk-button uk-button-primary">COMPLETE</button>
        </li>)}
      </ul>
    </div>
  )
}

export default App;
