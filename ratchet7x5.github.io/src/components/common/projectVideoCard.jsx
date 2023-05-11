import React from 'react';

export default function projectVideoCard() {
  return (
    <div className="rounded-lg bg-neutral-950">
      <div className="mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="gap-4 sm:gap-6">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            className="aspect-video h-full w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-300">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. <br />
            The powder coated steel divider separates active cards from new
            ones, or can be used to archive important task lists.
          </p>
        </div>
      </div>
    </div>
  );
}
