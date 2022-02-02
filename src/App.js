import {useState} from 'react'
import './App.css';

function App() {
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <h1>
        Todo List
      </h1>
      <div>
        <input value={taskDescription} onChange={e=> {
          setTaskDescription(e.target.value);
        }} type="text" placeholder="Enter Task Description" />
      </div>
      <button
        onClick={e=> {
          if(taskDescription.trim()){
          setTasks([...tasks, {description: taskDescription , completed: false}]);
          setTaskDescription('');
          }
        }}
        className="add-btn"
        style={{
          width: '160px',
          marginLeft: '5%',
          marginTop: '30px',
        }}
        >Add Task</button>
      <div>
        <ul style={{
          listStyle: 'none',
          marginBlockStart: '0',
          marginBlockEnd: '0',
          paddingInlineStart: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px'
        }}>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                <div style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  width: '90vw',
                  border: '1px solid gray',
                  backgroundColor: '#fff',
                  borderBottom: 'none',
                }}>
                  <p style={{
                    width: '80%',
                    display: 'inline-block',
                    textAlign: 'left',
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}>
                {task.description}
                  </p>
                  <button
                  className='complete-btn'
                  onClick={e=> {
                    const newTasks = [...tasks];
                    newTasks[index].completed = !newTasks[index].completed;
                    setTasks(newTasks);
                  }}
                  >Toggle Completed</button>
                  <button
                  className='delete-btn' 
                  onClick={e=> {
                    setTasks(tasks.filter((_, i) => i !== index));
                  }}
                  >Delete</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
