import {useState} from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://www.incimages.com/uploaded_files/image/1920x1080/feature-80-Musk-1-pan_5343.jpg'
    },
    {
      name: 'Jeff Bezos',
      url: 'https://content.fortune.com/wp-content/uploads/2016/03/bez04_ehigher-res-horizontal.jpg'
    }
  ]);
  // const [lastDirection, setLastDirection] = useState();

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
            <div style={{backgroundImage: `url(${person.url})`}} className={'card'}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
