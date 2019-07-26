import React from 'react'
import { Card } from 'semantic-ui-react'

export default function JediCard({num}) {
    return (
        <Card style={{ maxWidth: '250px', height: '150px', margin: '1rem' }}>
            <Card.Content>
                <Card.Header>{num.name}</Card.Header>
                <Card.Description>
                    Birth Year: {num.birth_year}<br/>
                    Gender: {num.gender}<br/>
                    Eye Color: {num.eye_color}<br/>
                    Height: {num.height}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}