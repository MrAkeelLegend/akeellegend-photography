import React from 'react';
import { Card } from '../card/card.component';
import { SRLWrapper } from "simple-react-lightbox";
import './card-list.styles.css';

export const CardList = props => (
  <SRLWrapper>
    <div className="card-list">

      {props.photos.map(photo => (
        <Card key={photo.id} photo={photo} />
      ))}

    </div>
  </SRLWrapper>
)