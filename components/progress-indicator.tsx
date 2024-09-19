import React from "react";

function ProgressIndicator() {
  return (
    <div className='flex justify-between mb-8'>
      <div className='flex items-center'>
        <div className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2'>
          1
        </div>
        <span className='font-semibold'>CHOOSE DEPARTURE FLIGHT</span>
      </div>
      <div className='flex items-center'>
        <div className='w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mr-2'>
          2
        </div>
        <span className='text-gray-600'>CHOOSE RETURN FLIGHT</span>
      </div>
      <div className='flex items-center'>
        <div className='w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mr-2'>
          3
        </div>
        <span className='text-gray-600'>PAYMENT</span>
      </div>
    </div>
  );
}

export default ProgressIndicator;
