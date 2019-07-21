import React from "react";
import Card from "react-bootstrap/Card";
import Classes from "./card.module.css";
const card = props => {
  let cardElement = null;
  let cardImagesLink = [], // Input props for this is an array of image links
    cardLinks = [], // Input is array of objects with key and value of link and linkext
    cardTitle = null,
    cardTextsLists = [], // Input is array of texts to distribute them in several paragraph
    cardHeader = null,
    cardWidth = "18rem";

  let cardErrorObject = {};
  if (props.errors) {
    cardErrorObject = { ...props.errors };
  }

  //Check for images and links and if exists then assign them
  if (props.cardImagesLink) {
    cardImagesLink = [...props.cardImagesLink];
  }

  //Check for other links and if exists assign them
  if (props.cardNonImageLinks) {
    cardLinks = [...props.cardNonImageLinks];
  }
  //Check and assign cardTitle
  if (props.cardTitle) {
    cardTitle = <Card.Title>{props.cardTitle}</Card.Title>;
  }
  //Check Texts from card
  if (props.cardTextsLists) {
    cardTextsLists = [...props.cardTextsLists];
  }
  //Check for card Header
  if (props.cardHeader) {
    cardHeader = <Card.Header>{props.cardHeader}</Card.Header>;
  }

  //Check for cardwidth  and if differs assign new value
  if (props.cardWidth && props.cardWidth !== "18rem") {
    cardWidth = props.cardWidth;
  }
  //   switch(props.CardType)
  cardElement = (
    <Card style={{ width: cardWidth }}>
      {/* {cardHeader} */}
      {cardTitle}
      {cardImagesLink.map((link, index) => (
        <Card.Img key={index} src={link} alt="Image" />
      ))}
      <Card.Body>
        {cardTextsLists.map((text, index) => (
          <Card.Text key={index}>{text}</Card.Text>
        ))}
      </Card.Body>
      {cardLinks.map((link, index) => (
        <a
          className={Classes.Card_Link}
          key={index}
          href={link.linkUrl}
        >
          {link.linkText}
        </a>
      ))}
    </Card>
  );

  return cardElement;
};

export default card;
