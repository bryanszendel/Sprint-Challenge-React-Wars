import React from 'react'

export default function JediCard(props) {
    return (
        <div>
            <h2>{props.num.name}</h2>
            <p>Birth Year: {props.num.birth_year}</p>
            <p>Gender: {props.num.gender}</p>
            <p>Eye Color: {props.num.eye_color}</p>
            <p>Height: {props.num.height}</p>
        </div>
    )
}