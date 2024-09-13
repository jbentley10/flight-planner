import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Navigation() {
  return (
    <div>
      <header className='bg-card shadow'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='w-40 h-8'>
            <Image
              src='/logo.webp'
              alt={"The FlyEasy logo"}
              width={200}
              height={50}
            />
          </div>
          <div className='space-x-4'>
            <Button variant='ghost'>LOG IN</Button>
            <Button>SIGN UP</Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
