import React from 'react';

class ActionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props
  }

    render() {
      return (
        <div>
          {this.props.actions.map((action, index) =>
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
        </div>
      )
    }
}

export default ActionList;