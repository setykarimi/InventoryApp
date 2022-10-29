import './App.css';
import Category from './components/Category';
import NavBar from './components/NavBar';

function App() {
  const products = [
    {
      id: 1,
      title: "Node.js",
      category: "backend",
      createdAt: "2022-10-31T15:03:23.556Z"
    },
    {
      id: 2,
      title: "React.js",
      category: "frontend",
      createdAt: "2022-09-41T15:10:33.556Z"
    },
    {
      id: 3,
      title: "Vue.js",
      category: "frontend",
      createdAt: "2022-10-31T22:17:39.556Z"
    }
  ]

  const category = [
    {
      id: 1,
      title: "frontend",
      description: "frontend of applications",
      createdAt: "2022-10-31T15:03:23.556Z"
    },
    {
      id: 2,
      title: "backend",
      description: "the backend of the applications",
      createdAt: "2021-12-56T56:09:43.556Z"
    }
  ]

  return (
    <div className='App bg-slate-500 min-h-screen'>
      <NavBar />
      <div className='container m-w-screen-sx m-auto '>
        <Category />
      </div>
    </div>
  );
}

export default App;
