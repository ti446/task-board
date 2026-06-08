import { useState } from 'react'
import './App.css'

function App() {
  const [taskList, setTaskList] = useState([])
  const [inputText, setInputText] = useState('')

  // タスクを追加する
  const addTask = () => {
    if (!inputText.trim()) return
    const newTask = {
      id: Date.now(),
      text: inputText.trim(),
      completed: false,
    }
    setTaskList([...taskList, newTask])
    setInputText('')
  }

  // Enterキーでタスクを追加する
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  // 完了・未完了を切り替える
  const toggleTask = (id) => {
    setTaskList(taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // タスクを削除する
  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <div className="board">
        <h1 className="title">タスクボード</h1>

        {/* タスク入力エリア */}
        <div className="inputArea">
          <input
            type="text"
            className="textInput"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="タスクを入力してEnterまたは追加ボタンを押してください"
          />
          <button className="addButton" onClick={addTask}>
            追加
          </button>
        </div>

        {/* タスク件数 */}
        {taskList.length > 0 && (
          <p className="taskCount">
            {taskList.filter((t) => !t.completed).length} / {taskList.length} 件が未完了
          </p>
        )}

        {/* タスク一覧 */}
        <ul className="taskList">
          {taskList.length === 0 && (
            <li className="emptyMessage">タスクがありません。追加してください。</li>
          )}
          {taskList.map((task) => (
            <li key={task.id} className={`taskItem ${task.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                className="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className="taskText">{task.text}</span>
              <button
                className="deleteButton"
                onClick={() => deleteTask(task.id)}
                aria-label="タスクを削除"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
