// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

console.log(data);

export default function App() {
  let cards = data.map(item => {
  return (
      <Card
        key={item.id}
        item={item}
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