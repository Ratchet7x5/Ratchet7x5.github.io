import { useState } from 'react';
import profpic from './assets/images/profile/480_No_BG.png';
import dgapppic from './assets/images/projects/dgapp/NDA.png';
import './App.css';
import ProjectImageCard from './components/common/projectImageCard';

function App() {
  return (
    <div className="App leading-tight font-sans-serif space-y-4">
      {/* div1 = About Me.  */}
      <div className=" rounded-lg bg-neutral-950">
        <div className="mx-auto grid max-w-2xl items-center gap-x-6 gap-y-12 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-4xl lg:grid-cols-1 lg:px-8">
          <div className="flex justify-center justify-self-center">
            <img
              class="h-5/6 w-5/6 rounded-full border-2 border-neutral-500 object-contain"
              src={profpic}
              alt="Tarun"
            />
          </div>
          <div class="">
            <p class="mt-4 text-gray-300">
              Hello, my name is Tarun Ramachandran. I'm a recent graduate from AUT
              and I'm currently on the hunt for a backend software development
              role.
            </p>
          </div>
        </div>
      </div>

      {/* soon-to-be image component */}

      <div className="rounded-lg bg-neutral-950 " id="projects">
        <div className="mx-auto items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="gap-1 sm:gap-6"></div>
          <div>
            <h2 className="font-bold text-3xl tracking-tight text-gray-300 sm:text-4xl ">
              Currently a work in progress. More projects will be added over time. 
            </h2>
          </div>
        </div>
      </div>

      {/* soon-to-be video component */}

      <ProjectImageCard
        image={dgapppic}
        projectTitle={'Dangerous Goods Project'}
        //escape characters won't work in JSX. So split the lines into multiple props or implement another solution.
        // see here: https://stackoverflow.com/questions/67616946/line-break-react-prop
        // and here: https://stackoverflow.com/questions/54197364/react-text-prop-linebreak?rq=3
        // bullet point: &bull;
        projectDescription={
          <text>
            During my final year of my BCIS degree at AUT, I undertook the
            Dangerous Goods Project, which was part of my Research and
            Development programme that all BCIS students must undertake before
            they are allowed to graduate.
            <br />
            <br />
            The project involved enhancing a prototype made by the previous R&D
            team of this project, as we were tasked with enhancing their
            segregation algorithm.
            <br />
            <br />
            &bull; Bullet point 1
          </text>
        }
      />

      {/* add footer here */}
      <footer className="rounded-lg bg-neutral-950">
        <p class="mt-4 text-gray-300">&copy; Tarun Ramachandran.</p>
      </footer>
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
