import React from 'react';
import { Button, Stack } from 'react-bootstrap';

function SwapWeapon() {
  return (
    <div className='HomeContainer'>
      <div className='SwapBg'>
        <Stack gap={2} className="col-6 mx-auto SwapButtons">
          <Button variant="light" className="LinkBoxSwap" id="LongswordLink" href="/Gauntlet">Longsword and shield</Button>
          <Button variant="light" className="LinkBoxSwap" id="LongswordTwoHandedLink" href="/GauntletTwoHanded">Longsword (two-handed)</Button>
          <Button variant="light" className="LinkBoxSwap" id="ShortswordLink" href="/GauntletShortsword">Dual-wielding longsword and shortsword</Button>
          <Button variant="light" className="LinkBoxSwap" id="RangedLink" href="/GauntletRanged">Heavy crossbow</Button>
        </Stack>
      </div>
    </div>
  );
}

export default SwapWeapon;
