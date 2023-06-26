import React from 'react';

export default function ProjectImageCard(props) {
  return (
    <div className="rounded-lg bg-neutral-950 " id="projects">
      <div className="mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        {/* Project Image(s) */}
        <div className="gap-4 sm:gap-6">
          <img
            src={props.image}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100"
          />
        </div>
        <div>
          {/* Project Name */}
          <h2 className="font-bold text-3xl tracking-tight text-gray-300 sm:text-4xl ">
            {props.projectTitle}
          </h2>
          {/* Project Accomplishments */}
          <p className="mt-4 text-gray-300">{props.projectDescription}</p>
        </div>
      </div>
    </div>
  );
}
