import React from "react";

const onClick = () => {
    alert('Onclick');
}

const GameCircle = () => {
    return (
        <div onClick={onClick}>
            GameCircle
        </div>
    )
}

export default GameCircle;