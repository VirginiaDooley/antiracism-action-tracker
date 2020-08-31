import React from 'react';
import './App.css';

class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actions: this.props.actions
        }
    }

    componentDidMount() {
        this.setState({ actions: this.props.actions })
    }

    render() {
        console.log(this.state)
        const {actions} = this.state
        const actionList = actions.map((action, index) =>
        <li key={index.toString()}>
            <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m">
            <div className="uk-card-badge uk-label">{action.badge}</div>
            <p className="uk-card-title">Action: {action.Title}</p>
            <a href="{action.Url}" className="uk-link-muted">{action.Url_title}</a>
            <p>Date added: {action.date_added}</p>
            <p>Deadline: {action.deadline}</p>
            <p id="status">Complete?: {action.Status}</p>
            <button className="uk-button uk-button-primary" name={action} value={action.Status} onClick={this.toggleStatus}>COMPLETE</button>
            </div>
        </li>
    )
        return (
            <div>{actionList}</div>
        )
    }


}
export default Actions;