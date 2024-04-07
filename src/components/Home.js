import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <div>Out of the Abyss Allies</div>
    <Link id="BruceLink" to="/Bruce">Bruce</Link>
    <Link id="EnclaveLink" to="/Enclave">Enclave</Link>
    <Link id="GauntletLink" to="/Gauntlet">Gauntlet</Link>
    <Link id="LordsAllianceLink" to="/LordsAlliance">Lords Alliance</Link>
    <Link id="HarpersLink" to="/Harpers">Harpers</Link>
    </div>
  )
}

export default Home