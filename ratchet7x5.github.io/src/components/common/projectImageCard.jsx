import React from 'react';

export default function projectImageCard() {
  return (
    <div className="rounded-lg bg-neutral-950 " id="projects">
      <div className="mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="gap-4 sm:gap-6">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100"
          />
        </div>
        <div>
          <h2 className="font-bold text-3xl tracking-tight text-gray-300 sm:text-4xl ">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-300">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>
        </div>
      </div>
    </div>
  );
}
