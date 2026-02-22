import { useState } from 'react';
import './App.css';
import profpic from './assets/images/profile/480_No_BG.png';
import dgapppic from './assets/images/projects/dgapp/NDA.png';
import quirkymentors from './assets/images/projects/quirky-mentors/mentors.png';
import drgmod from './assets/images/projects/drg/EBMV2.png';
import auis_homepage from './assets/images/projects/auis/auis_homepage.png';
import ProjectImageCard from './components/common/projectImageCard';

function App() {
  return (
    <div className="App leading-tight font-sans-serif space-y-4">
      {/* div1 = About Me.  */}
      <div className=" rounded-lg bg-neutral-950">
        <div className="mx-auto grid max-w-2xl items-center gap-x-6 gap-y-12 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-4xl lg:grid-cols-1 lg:px-8">
          <div className="flex justify-center justify-self-center">
            {/*<img
              class="h-5/6 w-5/6 rounded-full border-2 border-neutral-500 object-contain"
              src={profpic}
              alt="Tarun"
            />*/}
          </div>
          <div class="">
            <p class="mt-4 text-gray-300">
              Hello, my name is Tarun Ramachandran and welcome to my portfolio
              website where I showcase some of my projects. Currently an
              Artificial Intelligence Masters student at UNSW, and an AUT
              graduate in Computer Science. Currently looking to apply for any
              computer science related role!
            </p>
          </div>
        </div>
      </div>

      <ProjectImageCard
        image={auis_homepage}
        projectTitle={'AUIS Club App'}
        //escape characters won't work in JSX. So split the lines into multiple props or implement another solution.
        // see here: https://stackoverflow.com/questions/67616946/line-break-react-prop
        // and here: https://stackoverflow.com/questions/54197364/react-text-prop-linebreak?rq=3
        // bullet point: &bull;
        projectDescription={
          <text>
            Live Demo:{' '}
            <a
              href="https://auis.co.nz"
              target="_blank"
              className="text-blue-400"
            >
              Click here
            </a>
            <br />
            <br />
            Project was finished on May 2025, and handed over to the latest AUIS 
            Exec Team on 23rd January 2026. Between May 2025 and Jan 2026, the 
            project has been in "maintenance" mode where no new features were
            pushed, but we've kept a close eye on the health of the deployment.
            There were no new bugs discovered during this phase which was quite
            exciting for us.
            <br />
            <br />
            The main business problem that AUIS currently faces is that all
            memberships and event tickets sold are tracked via forms,
            spreadsheets, emails, and bank transfers. Managing over 500 members
            through this method is quite cumbersome and an extremely slow
            process. This is especially frustrating for the admins of the club
            as they have to constantly follow up with members to ensure that
            payments went through, the accuracy of the number of tickets sold,
            and more.
            <br />
            <br />
            This adminstrator nightmare is why the club has requested the Web
            Dev Consulting Club (WDCC) to create an app that can help solve this
            problem. The goal of this project will be to create an all-in-one
            web app where club adminstrators can create and manage events, sell
            tickets, and manage club members.
            <br />
            <br />
            And you can probably guess that I'm also a part of the team of
            developers who will be working on this project. I'm the main backend
            developer in charge of handling payments and ticketing. So I'll also
            be in charge of setting up the schemas for the database and any
            other backend code.
            <br />
            <br />
            As the backend developer, let's highlight some of the work I did on
            this project:
            <br />
            <br />
            &bull; Implemented Stripe Payments using JavaScript to handle real-time 
            payment processing, reducing manual reconciliation time from weeks to instant updates.
            <br />
            &bull; Migrated the database schema from MongoDB to PostgreSQL.
            <br />
            &bull; Created a custom Strapi plugin to handle event creation,
            ticketing, manage Stripe products and prices, and manage users.
            <br />
            &bull; Implemented SuperTokens to handle user roles, and authentication.
            <br />
            &bull; Implemented ticket emails that came with a QR Code that would be 
            scanned by staff upon arrival to gain entry to events
            <br />
          </text>
        }
      />

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
            <a
              href="https://quirky-mentors.vercel.app/"
              target="_blank"
              className="text-blue-400"
            >
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
            As the backend and deployment developer, let's highlight some of the
            work I did on this project:
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
        image={drgmod}
        projectTitle={'Even Better Mining - Deep Rock Galactic'}
        projectDescription={
          <text>
            Live Project:{' '}
            <a
              href="https://mod.io/g/drg/m/even-better-mining-v2"
              target="_blank"
              className="text-blue-400"
            >
              Click here
            </a>
            <br />
            <br />
            Since November 2022, a popular mod by the name "Better Digging"
            stopped working for over 12,000 users on the game "Deep Rock
            Galactic" (DRG). DRG is essentially a game where you go to multiple
            planets and mine for minerals while fighting off the local wildlife.
            Mining usually takes a while, as you need to hit your pickaxe
            against the overall terrain about 2 or 3 times. This mod lets you
            hit it once, which the previous Better Digging mod did. However, the
            owner of the mod hasn't updated the mod in over 300 days. So I took
            it upon myself to make an exact clone of this mod that worked.
            <br />
            <br />
            So during June-July 2023, I made this mod by editing over 153 files
            which was tedious and took over an hour, then play test the game to
            see if the mod worked (and it did!). After a major update to the
            game nearly 3 weeks later the mod broke, and we arrived at the same
            issue - spending an hour to get the mod back up working fine. This
            mod would break after each major update to the game which
            essentially means that every time the game gets a major update
            (every 3 months), I would have to spend an hour or so to make this
            mod, then test it in game to see if it works. Then launch the game.
            Then load up a level. Then... well check if it works or not.
            <br />
            <br />
            I then realized, I can just automate this process of opening the
            files, editing the values, then saving the file. To accomplish this
            I used a library called UAssetAPI which can open all the texture
            files and edit the value "HitsNeededToMine" to 1. After looking at
            some non-existent documentation and the somewhat well documented
            test-cases, I managed to get a CLI app running using C# to edit out
            all the files. The best part? It only took about 2 minutes for the
            CLI app to edit over 150+ files.
            <br />
            <br />
            Some highlights:
            <br />
            &bull; Integrated UAssetAPI to edit 150+ texture files to improve
            mod creating time by 95%.
            <br />
            &bull; Achieved over 65,500+ downloads and 12,000+ subscribers in
            the last 12 months.
            <br />
            &bull; Used C# to write a CLI program that edits the files
            automatically when run.
          </text>
        }
      />

      <ProjectImageCard
        image={dgapppic}
        projectTitle={'Dangerous Goods Project'}
        // worked on: backend, API requests, created a synthetic data set based on real linkedin profile data, deployed the app,
        projectDescription={
          <text>
            Note: Due to a Non-Disclosure Agreement, I'm not permitted to share
            any pictures of the app hence why you're seeing a "NDA" image.
            <br />
            <br />
            During my final year of my BCIS degree at AUT, I undertook the
            Dangerous Goods Project, which was part of my Research and
            Development programme that all BCIS students must undertake before
            they are allowed to graduate. The Dangerous Goods Project is
            essentially a mobile app built by a previous R&D student team that
            created a prototype to detect incorrect sorting issues within a
            driver's loading plan.
            <br />
            <br />
            The project involved enhancing a prototype made by the previous R&D
            team of this project, as we were tasked with enhancing their
            segregation algorithm. However, due to the codebase's poor
            organization and lack of documentation our team simply re-wrote the
            app from scratch.
            <br />
            <br />
            Our team added new features which include:
            <br />
            &bull; Improved UI: Our team created a new UI based the previous
            team's UI to make it easier to understand what the user must do at
            each screen.
            <br />
            &bull; Packaging Group Conflict Detection: If there any packing
            group violations, the app will detect it and prompt the user to
            remove the conflicting good.
            <br />
            &bull; Segregation Validator: A simple algorithm that checks for any
            incompatible dangerous goods in the loading plan.
            <br />
            &bull; Automatic Segregator: A back-tracking algorithm that will
            automatically sort dangerous goods and display a loading plan for
            the user. Users may also swap the dangerous goods around and
            manually check for incompatiblilties. This feature also allows users
            to drag and drop their DG around so they can change the positions of
            any DG and verify the validity of their loading plan.
          </text>
        }
      />

      {/* add footer here */}
      <footer className="rounded-lg bg-neutral-950">
        <p class="mt-4 text-gray-300">&copy; Tarun Ramachandran 2026</p>
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
