import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>Shelfie</div>
        <ul>
          <li>
            <Link activeClassName="active" to="/shelfa">
              <ShelfA>Shelf A</ShelfA>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/shelfb">
              <ShelfB>Shelf B</ShelfB>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/shelfc">
              <ShelfC>Shelf C</ShelfC>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/shelfd">
              <ShelfD>Shelf D</ShelfD>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
