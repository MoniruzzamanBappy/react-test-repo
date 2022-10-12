import './App.css';
import Todo from './component/Todo';

function App() {
  const datas = [
    {
      id: 1,
      title: "Hello world",
      completed: false
    },
    {
      id: 2,
      title: "Hello world 2",
      completed: false
    },
    {
      id: 3,
      title: "Hello world 3",
      completed: true
    },
    {
      id: 4,
      title: "Hello world 4",
      completed: true
    }
  ]
  return (
    <div className="App">
      {
        datas.map((data) => (
          <Todo key={data.id} data={data} />
        ))
      }
    </div>
  );
}

export default App;
