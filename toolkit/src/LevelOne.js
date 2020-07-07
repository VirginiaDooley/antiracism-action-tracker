import React from 'react';
// import LevelTwo from './LevelTwo';

class LevelOne extends React.Component {


  constructor(props) {
    super(props)
      this.state = {
        actions: [
          { 
            level: 1, 
            description: 'Sign a petition 1',
            isCompleted: true,
          },
          {
            level: 1, 
            description: 'Sign a petition 2',
            isCompleted: false,
          },
          {
            level: 1, 
            description: 'Sign a petition 3',
            isCompleted: false,
          }
        ]
      }
  }

  render() {

    console.log(this.state)
    const {actions} = this.state

    const actionList = actions.map((action) =>
    <li key={action.id} className="action-item">
      {action.description}
    </li>)

    return (
      <div>
        <form className="action-list">
          <ul>
            {actionList}
          </ul>
        </form>
      </div>
    );
  }
}


export default LevelOne;