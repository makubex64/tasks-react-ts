import React, { useState, useRef } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  name: string,
  done: boolean
}

function App(): JSX.Element {
  const [task, setTask] = useState<ITask[]>([])
  const [newTask, setNewTask] = useState<string>("")
  const taskInput = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormElement): void => {
    event.preventDefault();
    addTask(newTask)
    setNewTask("")
    taskInput.current?.focus();

  }

  const addTask = (name: string): void => {
    const newTask = [...task, { name, done: false }]
    setTask(newTask)

  }

  const toggleDoneTask = (index: number): void => {
    const newTasks: ITask[] = [...task];
    newTasks[index].done = !newTasks[index].done
    setTask(newTasks)
  }

  const removeTask = (index: number): void => {
    const newTasks: ITask[] = [...task]
    newTasks.splice(index,1);
    setTask(newTasks)

    console.log(index)

  }


  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h5>Todo App</h5>
                <input
                  className='form-control'
                  type="text"
                  onChange={event => setNewTask(event.target.value)}
                  value={newTask}
                  ref={taskInput}
                  autoFocus
                />
                <button className='btn btn-success  mt-2'>save</button>
              </form>
              {
                task.map((t: ITask, index: number) => {
                  return (
                    <div key={index} className="card card-body mt-2">
                      <h6 style={{ textDecoration: t.done ? "line-through" : "" }} >{t.name}</h6>
                      <div>
                        <button className='btn btn-secondary' onClick={() => toggleDoneTask(index)} >
                          {t.done ? "ok" : "X"}
                        </button>
                        <button className='btn btn-danger' onClick={() => removeTask(index)} >delete</button>
                      </div>
                      <p>{t.done}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
