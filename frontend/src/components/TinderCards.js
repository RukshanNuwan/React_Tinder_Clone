import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import Axios from '../api/axios';
import './TinderCards.css';

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  // const [lastDirection, setLastDirection] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const req = await Axios.get('/tinder/cards');
      setPeople(req.data);
    }

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };

  return (
    <div className={'tinder-cards'}>
      <div className="tinder-cards__card-container">
        {people.map((person) => (
          <TinderCard
            className={'swipe'}
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div style={{ backgroundImage: `url(${person.imgUrl})` }} className={'card'}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
