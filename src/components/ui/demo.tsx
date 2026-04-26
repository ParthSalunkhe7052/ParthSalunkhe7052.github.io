import React from 'react';
import { StarsBackground } from "./stars";

const GooeyDemo = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <StarsBackground 
        className="w-full h-full"
        factor={0.03}
        speed={60}
      />
    </div>
  );
};

export { GooeyDemo };
