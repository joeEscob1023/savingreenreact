import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

function RenderCard({ item }) {
  console.log(item);
  const { image, title, description } = item;
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        {props.appInfo.map(info => {
          return (
            <div className="col-md-4" key={info.id}>
              <RenderCard item={info} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
