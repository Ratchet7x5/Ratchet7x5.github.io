import { useState } from 'react';
import profpic from './assets/images/profile/480_No_BG.png';
import dgapppic from './assets/images/projects/dgapp/NDA.png';
import quirkymentors from './assets/images/projects/quirky-mentors/mentors.png';
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
              Hello, my name is Tarun Ramachandran. I'm a recent graduate from
              AUT and I'm currently on the hunt for a backend software
              development role.
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
              Currently a work in progress. More projects will be added over
              time.
            </h2>
          </div>
        </div>
      </div>

      {/* soon-to-be video component */}

      <ProjectImageCard
        image={quirkymentors}
        projectTitle={'Quirky Mentors Project - Create Camp Auckland 2023'}
        //escape characters won't work in JSX. So split the lines into multiple props or implement another solution.
        // see here: https://stackoverflow.com/questions/67616946/line-break-react-prop
        // and here: https://stackoverflow.com/questions/54197364/react-text-prop-linebreak?rq=3
        // bullet point: &bull;
        projectDescription={
          <text>
            Live Demo:{' '}
            <a href="https://quirky-mentors.vercel.app/" target="_blank">
              Click here
            </a>
            <br />
            <br />
            I attended Summer of Tech's 2-day event called "Create Camp" where
            students get paired up with other awesome students to make an
            interesting project based on using an API.
            <br />
            <br />
            The app idea was to find a way to connect mentors with mentee for
            either specialized career guidance, or some sort of help for their
            project to help grow a mentee's skillset. However, as a team it was
            difficult to justify the reason to make this app. So to solve this,
            we interviewed a few mentors to ask what would motivate them to use
            an app like ours.
            <br />
            <br />
            After a few interviews with some mentors, we found that the most
            valuable reason to use this app was to seamlessly scout for new
            talent while also providing unfiltered career guidance.
            <br />
            <br />
            For our project, we decided to create an app where the goal was to
            enable students to effectively seek out mentors to either get career
            guidance or some help on their project. Currently, most students can
            only get help from their university's career counselling department,
            or through Summer of Tech's "1-on-1 Super Mentor" program during
            2022. So there existed a special need to connect a mentee with a
            mentor.
            <br />
            <br />
            Now, let's highlight some of the work I did on this project:
            <br />
            <br />
            &bull; Interviewed mentors and mentees to gather motivation to using
            the app.
            <br />
            &bull; Implemented Axios to make requests to iScraper API and gather
            LinkedIn profile data.
            <br />
            &bull; Filtered LinkedIn profile data to create an anoynymized
            dataset so that the frontend team can create the app UI.
            <br />
            &bull; Deployed the live app using Vercel
            <br />
            &bull; Assisted teammates with Git to solve merge conflicts and
            improve productivity
          </text>
        }
      />

      <ProjectImageCard
        image={dgapppic}
        projectTitle={'Dangerous Goods Project'}
        // worked on: backend, API requests, created a false data set based on real linkedin profile data, deployed the app,
        projectDescription={
          <text>
            Note: Due to a Non-Disclosure Agreement, I'm not permitted to share
            any pictures of the app hence why you're seeing a "NDA" image.
            <br />
            <br />
            During my final year of my BCIS degree at AUT, I undertook the
            Dangerous Goods Project, which was part of my Research and
            Development programme that all BCIS students must undertake before
            they are allowed to graduate.
            <br />
            <br />
            The project involved enhancing a prototype made by the previous R&D
            team of this project, as we were tasked with enhancing their
            segregation algorithm. However, due to a poorly organized codebase
            our team simply re-wrote the app from scratch. We added new
            features:
            <br />
            &bull; Improved UI: Our team reworked the previous team's UI to make
            it easier to understand what the user must do at each screen. &bull;
            Improved UI: Our team reworked the previous team's UI to make it
            easier to understand what the user must do at each screen.
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
