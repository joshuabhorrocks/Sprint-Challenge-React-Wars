import React from "react";
import styled from "styled-components";

const StarWarsContent = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Skin Color: {props.skinColor}</p>
        </div>
    )
}
export default StarWarsContent; 