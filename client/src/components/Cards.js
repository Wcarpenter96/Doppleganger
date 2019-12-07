import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CelebCard = matches => (
  <Card>
    <Image src={matches[0].url ? matches.url : matches.celeb.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{matches.celeb.name}</Card.Header>
    </Card.Content>
    <Card.Content extra>
        <p>{matches.confidence}%</p>
      </Card.Content>
  </Card>
)

export default CelebCard;