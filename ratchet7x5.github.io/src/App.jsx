import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div className="App space-y-4">
      {/* div1 = About Me.  */}
      <div>
        <p>Hi, my name is Tarun Ramachandran. </p>
      </div>

      <div className="bg-neutral-950 rounded-lg">
        <div className="mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="gap-4 sm:gap-6">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-300">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-950">
        <div className="mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="gap-4 sm:gap-6">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              className="aspect-video w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-300">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. <br/>The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
todo: use these logos later
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://reactjs.org" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
*/
