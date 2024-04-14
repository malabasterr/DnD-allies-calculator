import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <div>Out of the Abyss Allies</div>
    <Link id="BruceLink" to="/Bruce">Bruce</Link>
    <Link id="EnclaveLink" to="/Enclave">Emerald Enclave Scouts</Link>
    <Link id="LizardsLink" to="/Lizards">Emerald Enclave Lizards</Link>
    <Link id="GauntletLink" to="/Gauntlet">Gauntlet</Link>
    <Link id="LordsAllianceLink" to="/LordsAlliance">Lords Alliance Guards</Link>
    <Link id="LordsAllianceSpiesLink" to="/LordsAllianceSpies">Lords Alliance Spies</Link>
    <Link id="HarpersLink" to="/Harpers">Harpers</Link>
    </div>
  )
}

export default Home