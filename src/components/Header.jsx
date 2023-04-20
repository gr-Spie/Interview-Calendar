import React from "react";
import PlusButton from "./PlusButton";

const Header = ( { onAddEvent }) => {
    return (
        <header>
        <p>Interview Calendar</p>
        <PlusButton onAddEvent={onAddEvent}/>
        </header>
    )
};

export default Header;