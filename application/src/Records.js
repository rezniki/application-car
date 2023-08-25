function Records(props) {
    return (
        props.record.map((item) => {
            <div className='record__data'>
                <button className='record__delete' onClick={() => {
                    let deleteCard = props.record.filter((element) => element.id !== item.id);
                    props.setRecord(deleteCard);
                }}>&times;</button>
                <p className='record__text'>{item.text}</p>
            </div>
        })
    );
}

export default Records






























// function Cards(props) {
//     return (
//         props.cards.map((item) => (
//             <div className='car__data'>
//                 <button className="car__delete" onClick={() => {
//                     let deleteArray = props.cards.filter((element) => element.id !== item.id);
//                     props.setCards(deleteArray);
//                 }}>&times;</button>
//                 <img src={item.image} className='main__img' alt='Car'></img>
//                 <p className='main__stamp'>{item.stamp}</p>
//                 <p className='main__speed'>Speed: {item.speed} km/h</p>
//                 <p className='main__release'>Release: {item.release}</p>
//                 <p className='main__country'>Country: {item.country}</p>
//                 <p className='main__weight'>Weight: {item.weight} kg</p>
//             </div>
//         ))
//     );  
// }

// export default Cards

