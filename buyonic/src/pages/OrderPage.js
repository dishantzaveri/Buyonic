import React from 'react'

export const OrderPage = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 grid-flow-rows xl:gap-12 lg:gap-8 sm:py-12 py-6 lg:px-16 md:px-24 sm:px-16 px-6 w-full min-h-screen text-gray-200 overflow-auto bg-gray-800 font-body">
      <div className="lg:col-span-2">
        <div className='rounded-xl shadow-md sm:py-4 py-3 sm:px-8 px-4 bg-spindle flex justify-between items-center min-w-min bg-gray-900'>
          <div>
            <h1 className='sm:text-lg text-base text-gray-500 uppercase'>User</h1>
            <h1 className='sm:text-xl text-lg font-semibold'>Name</h1>
          </div>
          <button className='sm:text-lg text-base font-semibold px-3 h-10 sm:rounded-2xl rounded-xl bg-green-400 text-gray-900 shadow-lg shadow-green-400/20 hover:shadow-green-400/40'>Change</button>
        </div>
        <div className="rounded-xl sm:py-4 py-3 sm:px-8 px-4 bg-gray-900 shadow-md xl:mt-12 mt-8">
          <h1 className='text-lg font-semibold uppercase'>Shipping Address</h1>
        </div>
        <form>
          <div className='sm:mt-6 mt-4 sm:px-0 px-4'>
            <div className='grid grid-cols-6 grid-flow-row sm:gap-6 gap-4'>
              <div className='col-span-3'>
                <div className='flex flex-col'>
                  <label className='sm:text-lg text-base'>Name*</label>
                  <input type='text' id='fname' className='sm:py-3 py-2 sm:px-5 px-3 mt-1 sm:rounded-xl rounded-lg text-gray-200 bg-gray-900 font-semibold sm:text-lg text-base focus:border-none' placeholder='Name'/>
                </div>
              </div>
              <div className='col-span-3'>
                <div className='flex flex-col'>
                  <label className='sm:text-lg text-base'>Contact*</label>
                  <input type='text' id='lname' className='sm:py-3 py-2 sm:px-5 px-3 mt-1 sm:rounded-xl rounded-lg text-gray-200 bg-gray-900 font-semibold sm:text-lg text-base focus:border-none' placeholder='Contact'/>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className='sm:text-lg text-base'>Address*</label>  
              <input type='text' id='address' className='sm:py-3 py-2 sm:px-5 px-3 mt-1 sm:w-3/4 w-full sm:rounded-xl rounded-lg text-gray-200 bg-gray-900 font-semibold sm:text-lg text-base focus:border-none' placeholder='Address'/>
            </div>
            <div className='grid grid-cols-6 grid-flow-row sm:gap-6 gap-4'>
              <div className='col-span-4'>
                <div className='flex flex-col'>
                  <label className='sm:text-lg text-base'>Email*</label>
                  <input type='text' id='lname' className='sm:py-3 py-2 sm:px-5 px-3 mt-1 sm:rounded-xl rounded-lg text-gray-200 bg-gray-900 font-semibold sm:text-lg text-base focus:border-none' placeholder='Email'/>
                </div>
              </div>
              <div className='col-span-2'>
                <div className="flex flex-col">
                  <label className='sm:text-lg text-base'>Postal Code*</label>  
                  <input type='text' id='PIN' className='sm:py-3 py-2 sm:px-5 px-3 mt-1 sm:w-full w-1/2 sm:rounded-xl rounded-lg text-gray-200 bg-gray-900 font-semibold sm:text-lg text-base focus:border-none' placeholder='Postal Code'/>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-6 grid-flow-row sm:gap-6 gap-4 mt-4'>
              <div className='col-span-3'>
                <div className='flex flex-col'>
                  <label className='sm:text-lg text-base'>City*</label>
                  <input type='text' id='city' className='sm:py-3 py-2 sm:px-5 px-3 mt-1 sm:rounded-xl rounded-lg text-gray-200 bg-gray-900 font-semibold sm:text-lg text-base focus:border-none' placeholder='City'/>
                </div>
              </div>
              <div className='col-span-3'>
                <div className='flex flex-col'>
                  <label className='sm:text-lg text-base'>Country*</label>
                  <input type='text' id='country' className='sm:py-3 py-2 sm:px-5 px-3 mt-1 sm:rounded-xl rounded-lg text-gray-200 bg-gray-900 font-semibold sm:text-lg text-base focus:border-none' placeholder='Country'/>
                </div>
              </div>
            </div>
            <div className='flex gap-6 sm:mt-8 mt-6'>
              <button className='sm:py-3 py-2 sm:px-6 px-3 sm:rounded-xl rounded-lg font-semibold sm:text-lg text-base bg-green-400 shadow-lg shadow-green-400/30 hover:shadow-green-400/50 text-gray-900'>Save and Deliver here</button>
              <button className='sm:py-3 py-2 sm:px-6 px-3 sm:rounded-xl rounded-lg font-semibold sm:text-lg text-base bg-gray-900 text=gray-200 shadow-lg shadow-green-400/30 hover:shadow-green-400/50'>Cancel</button>
            </div>
          </div>
        </form>
      </div>
      <div className="lg:col-span-1 lg:mt-0 sm:mt-12 mt-6 rounded-xl shadow-md lg:py-4 lg:px-8 sm:py-8 sm:px-12 px-8 py-4 bg-gray-900 min-h-min">
        <h1 className='uppercase lg:text-lg sm:text-3xl text-2xl font-semibold sm:mt-4 mt-3'>Your Order</h1>
        <hr className='lg:my-6 sm:my-8 my-4 border-gray-800'/>
        <div className='flex flex-col'>
          <div className='min-h-min sm:px-4 lg:py-5 sm:py-6 py-3 w-full flex content-center'>
            <div className='w-2/5'>
              <div className='w-3/4 h-full bg-white'>

              </div>
            </div>
            <div className=''>
              <h1 className='lg:text-xl sm:text-2xl text-xl font-semibold'>Product Name</h1>
              <div className='flex justify-between'>
                <h1 className='lg:text-sm sm:text-lg text-sm'>Type: <span className='font-semibold lg:text-base sm:text-xl text-lg lg:mr-0 mr-4'>XXX</span></h1>
                <h1 className='lg:text-sm sm:text-lg text-sm'>Size: <span className='font-semibold sm:text-xl text-lg lg:text-base'>XXX</span></h1>
              </div>
              <h1 className='lg:text-sm sm:text-lg text-sm'>Quantity: <span className='lg:text-base sm:text-xl text-lg font-semibold'>XXX</span></h1>
              <h1 className='lg:text-xl sm:text-2xl text-xl font-semibold'>$XXX</h1>
            </div>
          </div>
          <div className='min-h-min sm:px-4 lg:py-5 sm:py-6 py-3 w-full flex content-center'>
            <div className='w-2/5'>
              <div className='w-3/4 h-full bg-white'>

              </div>
            </div>
            <div className=''>
              <h1 className='lg:text-xl sm:text-2xl text-xl font-semibold'>Product Name</h1>
              <div className='flex justify-between'>
                <h1 className='lg:text-sm sm:text-lg text-sm'>Type: <span className='font-semibold lg:text-base sm:text-xl text-lg lg:mr-0 mr-4'>XXX</span></h1>
                <h1 className='lg:text-sm sm:text-lg text-sm'>Size: <span className='font-semibold sm:text-xl text-lg lg:text-base'>XXX</span></h1>
              </div>
              <h1 className='lg:text-sm sm:text-lg text-sm'>Quantity: <span className='lg:text-base sm:text-xl text-lg font-semibold'>XXX</span></h1>
              <h1 className='lg:text-xl sm:text-2xl text-xl font-semibold'>$XXX</h1>
            </div>
          </div>
        </div>
        <hr className='lg:my-6 sm:my-8 my-4 border-gray-800'/>
        <div className='min-h-min sm:px-4 w-full flex content-center'>
          <div className='w-2/5'>
            <h1 className='lg:text-lg sm:text-xl text-lg'>Taxes:</h1>
          </div>
          <div className=''>
            <h1 className='lg:text-lg sm:text-2xl text-xl font-semibold'>$XXX</h1>
          </div>
        </div>
        <div className='min-h-min sm:px-4 lg:mt-2 sm:mt-6 mt-2 w-full flex content-center'>
          <div className='w-2/5'>
            <h1 className='lg:text-lg sm:text-xl text-lg'>Discount:</h1>
          </div>
          <div className=''>
            <h1 className='lg:text-lg sm:text-2xl text-xl font-semibold'>$XXX</h1>
          </div>
        </div>
        <hr className='lg:my-6 sm:my-8 my-4 border-gray-800'/>
        <div className='min-h-min sm:px-4 py-2 w-full flex content-center'>
          <div className='w-2/5'>
            <h1 className='lg:text-2xl sm:text-3xl text-xl font-semibold uppercase'>Total:</h1>
          </div>
          <div className=''>
            <h1 className='lg:text-2xl sm:text-3xl text-2xl font-semibold uppercase'>$XXX</h1>
          </div>
        </div>
      </div>
    </div>
  )
}