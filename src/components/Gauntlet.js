import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GauntletStats from '../assets/GauntletStats.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, Button, Stack } from 'react-bootstrap';

//ADD HIT POINT TRACKER ---------------------------------------------

function Gauntlet() {
  // State variables
  const [toHit, setToHit] = useState([]);
  const [normalDamage, setNormalDamage] = useState([]);
  const [totalNormalDamage, setTotalNormalDamage] = useState(0);
  const [critDamage, setCritDamage] = useState([]);
  const [totalCritDamage, setTotalCritDamage] = useState(0);

  // Function to generate to hit numbers
  const generateHits = () => {
    const generatedNumbers = [];
    for (let i = 0; i < 5; i++) {
      generatedNumbers.push(Math.floor(Math.random() * 20) + 6);
    }
    setToHit(generatedNumbers);
  };

  // Function to generate to hit numbers with advantage
  const generateHitsWithAdvantage = () => {
    const generatedNumbers = [];
    for (let i = 0; i < 5; i++) {
      const roll1 = Math.floor(Math.random() * 20);
      const roll2 = Math.floor(Math.random() * 20);
      const higherResult = Math.max(roll1, roll2);
      const result = higherResult + 6;
      generatedNumbers.push(result);
    }
    setToHit(generatedNumbers);
  };
  

  // Function to generate to hit numbers with disadvantage
  const generateHitsWithDisadvantage = () => {
    const generatedNumbers = [];
    for (let i = 0; i < 5; i++) {
      const roll1 = Math.floor(Math.random() * 20);
      const roll2 = Math.floor(Math.random() * 20);
      const lowerResult = Math.min(roll1, roll2);
      const result = lowerResult + 6;
      generatedNumbers.push(result);
    }
    setToHit(generatedNumbers);
  };

  // Function to clear all state variables
  const clearAll = () => {
    setToHit([]);
    setNormalDamage([]);
    setTotalNormalDamage(0);
    setCritDamage([]);
    setTotalCritDamage(0);
  };

  // Function to generate normal damage
  const generateNormalDamage = (num) => {
    const generatedNumbers = [];
    for (let i = 0; i < num; i++) {
      generatedNumbers.push(Math.floor(Math.random() * 8) + 4);
    }
    setNormalDamage(generatedNumbers);
    setTotalNormalDamage(generatedNumbers.reduce((acc, curr) => acc + curr, 0));
  };

  // Function to generate critical damage
  const generateCritDamage = (num) => {
    const generatedNumbers = [];
    for (let i = 0; i < num; i++) {
      generatedNumbers.push((Math.floor(Math.random() * 8) + 4) + (Math.floor(Math.random() * 8) + 1));
    }
    setCritDamage(generatedNumbers);
    setTotalCritDamage(generatedNumbers.reduce((acc, curr) => acc + curr, 0));
  };

  return (
    <>
      <Container className="Container" fluid>
        <Row>
          <Col className="text-center">
            <h1 className="fw-bold display-4">Veterans of the Gauntlet</h1>
          </Col>
        </Row>
        <Row>
          <Col className="NoteCol text-start">
            <p className="fw-normal small">Note: With a longsword and shield equipped, Veterans will have an increased AC of 19, and can make two one-handed longsword attacks each turn.</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" xs={12} sm={12} md={8} lg={7} xl={7}>
            <Image src={GauntletStats} fluid/>
          </Col>
          <Col>
            <Row className="align-items-center">
              <Col></Col>
              <Col className="text-center" xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                <Button size="sm" variant="outline-dark" onClick={generateHits}>Longsword attack (holding shield)</Button>
              </Col>
              <Col className="text-start d-flex align-items-center">
                <Button className="border-0" size="sm" variant="outline-dark" href="/GauntletRanged"><p className="fw-normal small mb-0">Swap to crossbow</p></Button>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                <Button size="sm" variant="outline-success" onClick={generateHitsWithAdvantage}>with Advantage</Button>
              </Col>
              <Col className="text-start">
                <Button size="sm" variant="outline-danger" onClick={generateHitsWithDisadvantage}>with Disadvantage</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="Standard">
          <Col className="text-end">
            <Button variant="light" onClick={clearAll}><p className="fw-normal small mb-0">Clear</p></Button>
          </Col>
        </Row>
        <Row className="RollsContainer">
          <Col>
            <Row>
              <Col className="fw-bold text-center">To hit</Col>
            </Row>
            <Row>
              <Col className="text-left">
                <ol>
                  {toHit.map((number) => (
                    <li className="fw-normal small mb-0">{number}{number === 25 ? ' Critical Hit' : ''}{number === 6 ? ' Natural 1' : ''}</li>
                  ))}
                </ol>
              </Col>
            </Row>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <Stack className="AttackButtonMiddle">
              <div className="text-center Standard">Standard hits</div>
              <div className="text-center">
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateNormalDamage(1)}><p className="fw-normal small mb-0">1</p></Button>
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateNormalDamage(2)}><p className="fw-normal small mb-0">2</p></Button>
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateNormalDamage(3)}><p className="fw-normal small mb-0">3</p></Button>
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateNormalDamage(4)}><p className="fw-normal small mb-0">4</p></Button>
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateNormalDamage(5)}><p className="fw-normal small mb-0">5</p></Button>
              </div>
              <div className="text-center Standard">Critical hits</div>
              <div className="text-center">
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateCritDamage(1)}><p className="fw-normal small mb-0">1</p></Button>
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateCritDamage(2)}><p className="fw-normal small mb-0">2</p></Button>
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateCritDamage(3)}><p className="fw-normal small mb-0">3</p></Button>
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateCritDamage(4)}><p className="fw-normal small mb-0">4</p></Button>
                <Button className="AttackButton" variant="outline-secondary" size="sm" onClick={() => generateCritDamage(5)}><p className="fw-normal small mb-0">5</p></Button>
              </div>
            </Stack>
          </Col>
          <Col>
            <Row>
              <Col className="fw-bold text-center">Damage</Col>
            </Row>
            <Row>
              <Col className="text-center">
                {critDamage.map((number) => (
                  <div className="fw-normal small mb-0">{number}</div>
                ))}
                {normalDamage.map((number) => (
                  <div className="fw-normal small mb-0">{number}</div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="Total">
          <Col className="text-end">
            Total Damage: <span className='fw-bold'>{totalCritDamage + totalNormalDamage}</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gauntlet;
