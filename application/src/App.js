import {useState} from 'react';
import './App.css';

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
  let [text, setText] = useState();

  return (

    <div className="car__character">
      <h2 className='car__title'>Form for add car</h2>
      <input className='car__stamp' type='text' placeholder='stamp' value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}></input>
      <input className='car__speed' type='number' placeholder='speed' value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}></input>
      <input className='car__release' type='number' placeholder='release' value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}></input>
      <input className='car__country' type='text' placeholder='country' value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}></input>
      <input className='car__weight' type='number' placeholder='weight' value={text} 
        onChange={(event) => {
          setText(event.target.value);
        }}></input>
      <input className='car__image' type='text' placeholder='image' value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}></input>
      <button className='car__button'
        onClick={() => {
          setCards([
            ...cards,
            {
              stamp: text,
              speed: +text,
              release: +text,
              country: text,
              weight: +text,
              image: text
            }
          ])
        }}>Add car</button>

      <div className='car__card'>
        {cards.map((item) => (
          <div className='car__data'>
            <img src={item.image} className='main__img' alt='Car'></img>
            <p className='main__stamp'>{item.stamp}</p>
            <p className='main__speed'>Speed: {item.speed} km/h</p>
            <p className='main__release'>Release: {item.release}</p>
            <p className='main__country'>Country: {item.country}</p>
            <p className='main__weight'>Weight: {item.weight} kg</p>
          </div>
        ))}
      </div>
    </div>
    // <div>
    //   <div className="list">
        
    //     {cards.map((item) => (
    //       <div className='igor' onClick={() => {
    //         console.log('hello');
    //       }}>
    //         {item.name}
    //       </div>
    //     ))}
    //     <input className='input' type='text' placeholder='please enter name' value={text}
    //       onChange={(event) => {
    //         setText(event.target.value);
    //       }}></input>
    //   </div>

    //   <div
    //     className='btn'
    //     onClick={() => {
    //       setCards([
    //         ...cards,
    //         {
    //           name: text
    //         },
    //       ]);
    //     }}>
    //       Add
    //   </div>
    // </div>
  );
}

export default App;

