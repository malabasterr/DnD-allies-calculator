import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Bruce from './components/Bruce';
import Enclave from './components/Enclave';
import EnclaveRanged from './components/EnclaveRanged';
import Gauntlet from './components/Gauntlet';
import GauntletRanged from './components/GauntletRanged';
import Harpers from './components/Harpers';
import LordsAlliance from './components/LordsAlliance';
import LordsAllianceSpies from './components/LordsAllianceSpies';
import LordsAllianceSpiesRanged from './components/LordsAllianceSpiesRanged';
import Lizards from './components/Lizards';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Bruce" element={<Bruce />} />
          <Route path="/Enclave" element={<Enclave />} />
          <Route path="/EnclaveRanged" element={<EnclaveRanged />} />
          <Route path="/Lizards" element={<Lizards />} />
          <Route path="/Gauntlet" element={<Gauntlet />} />
          <Route path="/GauntletRanged" element={<GauntletRanged />} />
          <Route path="/Harpers" element={<Harpers />} />
          <Route path="/LordsAlliance" element={<LordsAlliance />} />
          <Route path="/LordsAllianceSpies" element={<LordsAllianceSpies />} />
          <Route path="/LordsAllianceSpiesRanged" element={<LordsAllianceSpiesRanged />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
