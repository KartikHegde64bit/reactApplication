import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
    const cityNames = ["Mumbai", "Chennai", "Delhi", "Banglore"];
    const handleClick = (event: MouseEvent) => {
        console.log(event.type);
    };
    return (
        <Fragment>
            <h1>ListGroup</h1>
            <ul className="list-group">
                {cityNames.map((city) => (
                    <li
                        key={city}
                        className="list-group-item"
                        onClick={handleClick}
                    >
                        {city}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;
