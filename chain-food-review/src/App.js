// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
  let cards = data.map(item => {
  return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}
