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
import Lizards from './components/Lizards';
import HarpersRanged from './components/HarpersRanged';
import HarpersHM from './components/HarpersHM';
import HarpersRangedHM from './components/HarpersRangedHM';
import LordsAllianceSpiesSA from './components/LordsAllianceSpiesSA';
import GauntletTwoHanded from './components/GauntletTwoHanded';
import GauntletShortsword from './components/GauntletShortsword';
import SwapWeapon from './components/SwapWeapon';

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
          <Route path="/GauntletTwoHanded" element={<GauntletTwoHanded />} />
          <Route path="/GauntletShortsword" element={<GauntletShortsword />} />
          <Route path="/SwapWeapon" element={<SwapWeapon />} />
          <Route path="/Harpers" element={<Harpers />} />
          <Route path="/HarpersRanged" element={<HarpersRanged />} />
          <Route path="/HarpersHM" element={<HarpersHM />} />
          <Route path="/HarpersRangedHM" element={<HarpersRangedHM />} />
          <Route path="/LordsAlliance" element={<LordsAlliance />} />
          <Route path="/LordsAllianceSpies" element={<LordsAllianceSpies />} />
          <Route path="/LordsAllianceSpiesSA" element={<LordsAllianceSpiesSA />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
