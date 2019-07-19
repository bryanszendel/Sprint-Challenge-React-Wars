import React from 'react'
import { Card } from 'semantic-ui-react'

export default function JediCard(props) {
    return (
        <Card style={{ maxWidth: '250px', height: '150px', margin: '1rem' }}>
            <Card.Content>
                <Card.Header>{props.num.name}</Card.Header>
                <Card.Description>
                    Birth Year: {props.num.birth_year}<br/>
                    Gender: {props.num.gender}<br/>
                    Eye Color: {props.num.eye_color}<br/>
                    Height: {props.num.height}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}