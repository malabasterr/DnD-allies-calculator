import React from 'react';
import { Button, Stack } from 'react-bootstrap';

function Home() {
  return (
    <div className='HomeContainer'>
      <div className='HomeBg'>
      <div className="Title fw-bold HomeTitle text-center">Out of the Abyss Ally Groups</div>
        <Stack gap={2} className="col-6 mx-auto">
          <Button variant="dark" className="LinkBox" id="EnclaveLink" href="/Enclave">Emerald Enclave Scouts</Button>
          <Button variant="dark" className="LinkBox" id="LizardsLink" href="/Lizards">Emerald Enclave Lizards</Button>
          <Button variant="dark" className="LinkBox" id="LordsAllianceLink" href="/LordsAlliance">Lord's Alliance Guards</Button>
          <Button variant="dark" className="LinkBox" id="LordsAllianceSpiesLink" href="/LordsAllianceSpies">Lord's Alliance Spies</Button>
          <Button variant="dark" className="LinkBox" id="HarpersLink" href="/Harpers">Harper Rangers</Button>
          <Button variant="dark" className="LinkBox" id="GauntletLink" href="/Gauntlet">Veterans of the Gauntlet</Button>
          <Button variant="dark" className="LinkBox" id="BruceLink" href="/Bruce">Bruce (Shield Guardian)</Button>
        </Stack>
      </div>
    </div>
  );
}

export default Home;
