import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    students: []
  }

  async componentDidMount() {
    const response = await fetch('https://api.hatchways.io/assessment/students')
    const data = await response.json();
    this.setState({ students: data.students})
  }

  render() {
    return (
      <div className="App">
        {this.state.students.map((student, idx) => {
          const average = student.grades.reduce((sum, curr) => sum + Number(curr), 0)/8;
          return (
            <div>
              <img src={student.pic} alt='student pic' key={idx}/>
              <h3>{student.firstName} {student.lastName}</h3>
              <p>Email: {student.email}</p>
              <p>Company: {student.company}</p>
              <p>Skill: {student.skill}</p>
              <p>Average: {average}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
