import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GauntletStats from '../assets/GauntletStats.jpg';

//ADD HIT POINT TRACKER

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
    <div className='AllyContainer'>
      <div className='AllyTitle'>Veterans of the Gauntlet</div>
      <div className='InfoContainer'>
      <img className='AllyStats' src={GauntletStats} alt="Gauntlet Stat Block" />
      <div className='AllyNotes'>Note: With a longsword and shield equipped, Veterans will have an increased AC of 19, and can make two one-handed longsword attacks each turn. </div>
      </div>

        <div className='AttackButtonContainer'>
        <button className='AttackButton' id="MainAttackButton" onClick={generateHits}>Longsword attack (holding shield)</button>
        
        <Link id="GauntletRangedLink" to="/GauntletRanged">Swap to crossbow</Link>
        <div className='ModifierButtonContainer'>
        <button className='AttackButton' id="AdvantageButton" onClick={generateHitsWithAdvantage}>with Advantage</button>
        <button className='AttackButton' id="DisadvantageButton" onClick={generateHitsWithDisadvantage}>with Disadvantage</button>
        </div>
        </div>
        
        <div className='ClearButtonContainer'>
      <button className='ClearButton' onClick={clearAll}>Clear</button>
      </div>

        <div className='AttackContainer'>
        <div className='HitListContainer'>
            <div className='HitTitle'>To hit</div>
          <ol className='HitList'>
            {toHit.map((number) => (
              <li>{number}{number === 25 ? ' Critical Hit' : ''}{number === 6 ? ' Natural 1' : ''}</li>
            ))}
          </ol>
          </div>

        <div className='QuestionContainer'>
          <div className='Question'>Standard hits</div>
          <div className='NumberButtonContainer'>
          <button className='NumberButton' onClick={() => generateNormalDamage(1)}>1</button>
          <button className='NumberButton' onClick={() => generateNormalDamage(2)}>2</button>
          <button className='NumberButton' onClick={() => generateNormalDamage(3)}>3</button>
          <button className='NumberButton' onClick={() => generateNormalDamage(4)}>4</button>
          <button className='NumberButton' onClick={() => generateNormalDamage(5)}>5</button>
          </div>
          <div className='Question'>Critical hits</div>
          <div className='NumberButtonContainer'>
          <button className='NumberButton' onClick={() => generateCritDamage(1)}>1</button>
          <button className='NumberButton' onClick={() => generateCritDamage(2)}>2</button>
          <button className='NumberButton' onClick={() => generateCritDamage(3)}>3</button>
          <button className='NumberButton' onClick={() => generateCritDamage(4)}>4</button>
          <button className='NumberButton' onClick={() => generateCritDamage(5)}>5</button>
          </div>
          </div>

          <div className='DamageListContainer'>
            <div className='DamageTitle'>Damage</div>
          <ul className='DamageList'>
            {critDamage.map((number) => (
              <li>{number}</li>
            ))}
            {normalDamage.map((number) => (
              <li>{number}</li>
            ))}
          </ul>
          <div className='TotalDamage'>Total Damage: {totalCritDamage + totalNormalDamage}</div>
          </div>
          </div>

    </div>
  );
}

export default Gauntlet;
