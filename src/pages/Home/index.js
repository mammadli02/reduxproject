import React from "react";
import { useSelector } from "react-redux";
import { selcolorGroup } from "../../store/slice/colorSlice";
import Container from 'react-bootstrap/Container';
import { Card } from "react-bootstrap";
const Home = () => {
  const colorGroup = useSelector(selcolorGroup);
  return (
    <Container>
      <h1>Home page</h1>
        {colorGroup.map((item, i) => {
          return (
         <>
            <div key={i}>
              <h2>{item.name}</h2>
              <div key={i}>
                {item.colorList?.map((color, i) => {
                  const { colorName, colorCode } = color;
                  return <Card.Body style={{backgroundColor:`${colorCode}`, width:'70px', height:"50px", padding:"20px"}}>
                    {colorName}
                  </Card.Body>
                })}
              </div>
            </div>
</>
          );
        })}
    </Container>
  );
};

export default Home;
