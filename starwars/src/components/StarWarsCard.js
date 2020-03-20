import React, {useState, useEffect} from "react";
import StarWarsContent from "./StarWarsContent";
import styled from "styled-components";
import axios from "axios";

const StarWarsCard = () => {
    const [people, setPeople] = useState();
    
  const StarWarsCard = styled.div `
    background: black;
    color: yellow;
    display: flex;
    flex-wrap: wrap;
    margin: 1% 3%;
    padding: 1% 30%;
    border 3px solid dodgerBlue;
  `;

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
          .then(response => {
            console.log(response.data.results);
            setPeople(response.data.results);
          })
          .catch(error => {
            console.log("Data retrieval failed", error);
          });
      }, []);

    return (
        <div>
        <StarWarsCard>
        {people && people.map(person => {
        return <StarWarsContent name = {person.name} height = {person.height} hairColor = {person.hair_color} skinColor = {person.skin_color}/>
        })}
        </StarWarsCard>
        </div>
    );
};

export default StarWarsCard;