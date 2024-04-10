import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GauntletStats from '../assets/GauntletStats.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image } from 'react-bootstrap';

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
      {/* <div className='AllyContainer'> ------------------------------------*/}
      <Container>
        <Row>
          <div className='AllyTitle'>Veterans of the Gauntlet</div>
        </Row>
        <Row>
          <Col>
            <Image src={GauntletStats} fluid/>
          </Col>
          <Col>
            <div className='AllyNotes'>Note: With a longsword and shield equipped, Veterans will have an increased AC of 19, and can make two one-handed longsword attacks each turn. </div>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col>
              <button id="MainAttackButton" onClick={generateHits}>Longsword attack (holding shield)</button>
            </Col>
            <Col>
              <Link id="GauntletRangedLink" to="/GauntletRanged">Swap to crossbow</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <button id="AdvantageButton" onClick={generateHitsWithAdvantage}>with Advantage</button>
            </Col>
            <Col>
              <button id="DisadvantageButton" onClick={generateHitsWithDisadvantage}>with Disadvantage</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <button onClick={clearAll}>Clear</button>
            </Col>
          </Row>
        </Row>
        <Row>
        {/* Combine this class and Col? -------------------------- */}
          <div className='AttackContainer'> 
          <Col>
            <div className='HitTitle'>To hit</div>
              <ol>
                {toHit.map((number) => (
                  <li>{number}{number === 25 ? ' Critical Hit' : ''}{number === 6 ? ' Natural 1' : ''}</li>
                ))}
              </ol>
          </Col>
          </div>

          <Row>
            <Col>
              <div>Standard hits</div>
              <button onClick={() => generateNormalDamage(1)}>1</button>
              <button onClick={() => generateNormalDamage(2)}>2</button>
              <button onClick={() => generateNormalDamage(3)}>3</button>
              <button onClick={() => generateNormalDamage(4)}>4</button>
              <button onClick={() => generateNormalDamage(5)}>5</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>Critical hits</div>
              <button onClick={() => generateCritDamage(1)}>1</button>
              <button onClick={() => generateCritDamage(2)}>2</button>
              <button onClick={() => generateCritDamage(3)}>3</button>
              <button onClick={() => generateCritDamage(4)}>4</button>
              <button onClick={() => generateCritDamage(5)}>5</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='DamageTitle'>Damage</div>
              <ul className='DamageList'>
                {critDamage.map((number) => (
                  <li>{number}</li>
                ))}
                {normalDamage.map((number) => (
                  <li>{number}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='TotalDamage'>Total Damage: {totalCritDamage + totalNormalDamage}</div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Gauntlet;
