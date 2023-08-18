function Cards(props) {
    return (
        props.cards.map((item) => (
            <div className='car__data'>
                <img src={item.image} className='main__img' alt='Car'></img>
                <p className='main__stamp'>{item.stamp}</p>
                <p className='main__speed'>Speed: {item.speed} km/h</p>
                <p className='main__release'>Release: {item.release}</p>
                <p className='main__country'>Country: {item.country}</p>
                <p className='main__weight'>Weight: {item.weight} kg</p>
            </div>
        ))
    );  
}

export default Cards

