import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            <Note title="Independence Day" body= "Directed by Roland Emmerich, The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.  Rated PG-13, Action, Adventure, Sci-Fi, 1996"/>
            <Note title="The Core" body="Directed by Jon Amiel, The only way to save Earth from catastrophe is to drill down to the core and set it spinning again.  Rated PG-13, Action, Adventure, Sci-Fi, 2003"/>
            <Note title="A Walk To Remember" body="Directed by Adam Shankman, Two North Carolina teens, Landon Carter and Jamie Sullivan, are thrown together after Landon gets into trouble and is sentenced to perform community service.  Rated PG, Drama, Romance, 2002"/>
            <Note title="Jumanji" body="Directed by Joe Johnston, When two kids find and play a magical board game, they release a man trapped in it for decades - and a host of dangers that can only be stopped by finishing the game.  Rated PG, Adventure, Comedy, Family, 1995"/>
            <Note title="Footloose" body="Directed by Herbert Ross, A city teenager moves to a small town where rock music and dancing have been banned, and his rebellious spirit shakes up the populace.  Rated PG, Drama, Music, Romance, 1984"/>
            <Note title="Back to the Future" body="Directed by Robert Zemeckis, Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.  Rated PG, Adventure, Comedy, Sci-fi, 1985"/>
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}

export default Board;