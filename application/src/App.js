import {useState} from 'react';
import './App.css';
import Cards from './Cards.js'

function App() {
  let [cards, setCards] = useState([
    {
      stamp: 'Volkswagen Golf 8',
      speed: 216,
      release: 2019,
      country: 'Germany',
      weight: 1333,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/2020_Volkswagen_Golf_Style_1.5_Front.jpg'
    },
    
    {
      stamp: 'Tesla Model S Plaid',
      speed: 322,
      release: 2022,
      country: 'USA',
      weight: 2237,
      image: 'https://images.drive.ru/i/0/5f6c5369ec05c4fe2700000f.jpg'
    },
    
    {
      stamp: 'Dodge Challenger Demon 170',
      speed: 346,
      release: 2023,
      country: 'USA',
      weight: 1553,
      image: 'https://www.topgear.com/sites/default/files/cars-car/image/2019/01/dg019_004clan2kt8c8qmtrmpcl3p72agsepl.jpg'
    }
  ]);
  let [valueStamp, setStamp] = useState();
  let [valueSpeed, setSpeed] = useState();
  let [valueRelease, setRelease] = useState();
  let [valueCountry, setCountry] = useState();
  let [valueWeight, setWeight] = useState();
  let [valueImage, setImage] = useState();

  return (
    <div className="car__character">
      <h2 className='car__title'>Form for add car</h2>
      <input className='car__stamp' type='text' placeholder='stamp' value={valueStamp}
        onChange={(event) => {
          setStamp(event.target.value);
        }}></input>
      <input className='car__speed' type='number' placeholder='speed' value={valueSpeed}
        onChange={(event) => {
          setSpeed(event.target.value);
        }}></input>
      <input className='car__release' type='number' placeholder='release' value={valueRelease}
        onChange={(event) => {
          setRelease(event.target.value);
        }}></input>
      <input className='car__country' type='text' placeholder='country' value={valueCountry}
        onChange={(event) => {
          setCountry(event.target.value);
        }}></input>
      <input className='car__weight' type='number' placeholder='weight' value={valueWeight} 
        onChange={(event) => {
          setWeight(event.target.value);
        }}></input>
      <input className='car__image' type='text' placeholder='image' value={valueImage}
        onChange={(event) => {
          setImage(event.target.value);
        }}></input>
      <button className='car__button'
        onClick={() => {
          setCards([
            ...cards,
            {
              stamp: valueStamp,
              speed: +valueSpeed,
              release: +valueRelease,
              country: valueCountry,
              weight: +valueWeight,
              image: valueImage
            }
          ])
        }}>Add car</button>

      <div className='car__card'><Cards cards={cards}/></div>
    </div>
  );
}

export default App;

