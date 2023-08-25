import {useState} from 'react';
import './App.css';
import Records from './Records';

function App() {
  let [record, setRecord] = useState([
    {
      record: 'Объект — это набор свойств, и каждое свойство состоит из имени и значения, ассоциированного с этим именем. Значением свойства может быть функция, которую можно назвать методом объекта. В дополнение к встроенным в браузер объектам, вы можете определить свои собственные объекты.'
    }
  ]);

  let [newRecord, setNewRecord] = useState();

  return (
    <div className='record__container'>
      <h2 className='record__title'>Code Diary: Exploring JavaScript Daily</h2>
      <p className='record__new'>Add new record for JS</p>
      <input className='record__input' type='text' placeholder='enter new record' value={newRecord}
        onChange={(event) => {
          setNewRecord(event.target.value);
        }}></input>
      <button className='record__button'
        onClick={() => {
          setRecord([
            ...record,
            {
              text: record
            }
          ])
        }}>add</button>
      
      <p className='records__subtext'>Records</p>
      <div className='records__cards'><Records record={record} setRecord={setRecord}/></div>
    </div>
  );
}

export default App


























// import {useState} from 'react';
// import './App.css';
// import Cards from './Cards.js'

// function App() {
//   let [cards, setCards] = useState([
//     {
//       id: Math.random(),
//       stamp: 'Volkswagen Golf 8',
//       speed: 216,
//       release: 2019,
//       country: 'Germany',
//       weight: 1333,
//       image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/2020_Volkswagen_Golf_Style_1.5_Front.jpg'
//     },
    
//     {
//       id: Math.random(),
//       stamp: 'Tesla Model S Plaid',
//       speed: 322,
//       release: 2022,
//       country: 'USA',
//       weight: 2237,
//       image: 'https://images.drive.ru/i/0/5f6c5369ec05c4fe2700000f.jpg'
//     },
    
//     {
//       id: Math.random(),
//       stamp: 'Dodge Challenger Demon 170',
//       speed: 346,
//       release: 2023,
//       country: 'USA',
//       weight: 1553,
//       image: 'https://www.topgear.com/sites/default/files/cars-car/image/2019/01/dg019_004clan2kt8c8qmtrmpcl3p72agsepl.jpg'
//     }
//   ]);
//   let [valueStamp, setStamp] = useState();
//   let [valueSpeed, setSpeed] = useState();
//   let [valueRelease, setRelease] = useState();
//   let [valueCountry, setCountry] = useState();
//   let [valueWeight, setWeight] = useState();
//   let [valueImage, setImage] = useState();

//   return (
//     <div className="car__character">
//       <h2 className='car__title'>Form for add car</h2>
//       <input className='car__stamp' type='text' placeholder='stamp' value={valueStamp}
//         onChange={(event) => {
//           setStamp(event.target.value);
//         }}></input>
//       <input className='car__speed' type='number' placeholder='speed' value={valueSpeed}
//         onChange={(event) => {
//           setSpeed(event.target.value);
//         }}></input>
//       <input className='car__release' type='number' placeholder='release' value={valueRelease}
//         onChange={(event) => {
//           setRelease(event.target.value);
//         }}></input>
//       <input className='car__country' type='text' placeholder='country' value={valueCountry}
//         onChange={(event) => {
//           setCountry(event.target.value);
//         }}></input>
//       <input className='car__weight' type='number' placeholder='weight' value={valueWeight} 
//         onChange={(event) => {
//           setWeight(event.target.value);
//         }}></input>
//       <input className='car__image' type='text' placeholder='image' value={valueImage}
//         onChange={(event) => {
//           setImage(event.target.value);
//         }}></input>
//       <button className='car__button'
//         onClick={() => {
//           setCards([
//             ...cards,
//             {
//               id: Math.random(),
//               stamp: valueStamp,
//               speed: +valueSpeed,
//               release: +valueRelease,
//               country: valueCountry,
//               weight: +valueWeight,
//               image: valueImage
//             }
//           ])
//         }}>Add car</button>

//       <div className='car__card'><Cards cards={cards} setCards={setCards}/></div>
//     </div>
//   );
// }

// export default App;

