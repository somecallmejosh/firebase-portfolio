'use strict';
var fbRoot = new Firebase('https://jkb-portfolio.firebaseio.com/');
fbRoot.set({
  siteConstants: {
    name: 'Joshua Briley',
    city: 'Manchester',
    state: 'CT',
    zip: '06042',
    jobTitle: 'Front End Developer',
    email: 'josh@thebrileys.com',
    phone: '8605318250',
    phoneFormatted: '(860)-531-8250',
    twitter: 'http://www.twitter.com/joshuabriley',
    linkedIn: 'https://www.linkedin.com/in/somecallmejosh',
    gitHub: 'https://github.com/somecallmejosh'
  },
  landingPageContent: {
    headline: 'Professional Website Design & Development',
    bio: 'From small brochure websites to large scale fantasy gaming applications for professional sporting organizations, I have helped solve a variety of web based problems over the last 12 years. Feel free to touch base to see how I can help you.',
    bioPic: 'http://somecallmejosh.com/assets/images/landing/landing2x.jpg' 
  },
  portfolioItems: {
    item1: {
      name: 'Groove Generator',
      pic: 'https://dl.dropboxusercontent.com/u/39806773/thinkful-shared-items/portfolio-item-1.jpg',
      url: 'http://somecallmejosh.github.io/fatback-generator/',
      codeUrl: 'https://github.com/somecallmejosh/fatback-generator',
      description: 'This is a javascript based web app that uses the Youtube API to randomly integrate drumless audio tracks to play along with randomly transcribed drum patterns.'
    },
    item2: {
      name: 'Drum Intro Quiz',
      pic: 'https://dl.dropboxusercontent.com/u/39806773/thinkful-shared-items/portfolio-item-2.jpg',
      url: 'http://somecallmejosh.github.io/quiz-app/',
      codeUrl: 'https://github.com/somecallmejosh/quiz-app',
      description: 'Javascript based audio quiz that scores a users correct and incorrect answers. No drum intros or drummers were injured in the making of this app.'
    },
    item3: {
      name: 'Hot or Cold',
      pic: 'https://dl.dropboxusercontent.com/u/39806773/thinkful-shared-items/portfolio-item-3.jpg',
      url: 'http://somecallmejosh.github.io/hot-or-cold-starter/',
      codeUrl: 'https://github.com/somecallmejosh/hot-or-cold-starter',
      description: 'In this game, the computer will randomly select a number between 1 and 100. The player then tries to guess the number. The player gets feedback for each guess.'
    }
  },
  testimonials: {
    testimonial1: {
      name: 'Ethan J. Brown',
      title: 'Senior Software Engineer',
      company: 'Puppet Labs, Inc.',
      pic: 'http://somecallmejosh.com/assets/images/testimonials/ethan_brown.jpg',
      content: 'Josh is a highly productive and well-organized front end designer. He was hired at East Point Systems to head up user interface design and implementation for an AngularJS based web application. Josh was always ahead of schedule with the implementation of his responsibilities, so this allowed him to tackle other marketing duties where he saw a need for improvement. He personally interviewed staff to develop a benefits-based picture of product offerings, and he used this to simplify and relaunch a fresh design for the company website.'
    },
    testimonial2: {
      name: 'Fred Johanns, III',
      title: 'Software Developer / Team Lead',
      company: 'Beazley',
      pic: 'http://somecallmejosh.com/assets/images/testimonials/fred_johanns.jpg',
      content: 'Josh has a great eye for simple design. His web sites are clean yet comprehensive. Beyond this, Josh is a self-starter in every sense of the term. He consumed design and marketing tasks in short order while the rest of us tried to keep up. This left him opportunities to start branching out into development work and left me impressed with his ambition.'
    },
    testimonial3: {
      name: 'Ephraim Mower',
      title: 'Software Development Engineer',
      company: 'Evolution1',
      pic: 'http://somecallmejosh.com/assets/images/testimonials/ephraim_mower.jpg',
      content: 'Josh was a pleasure to work with. Not only does he have a grasp on UI and UX concerns and best practices, he is very pragmatic and takes the time to really understand what a business offers and how to best represent that digitally. In addition, his skill with the technology stack was great and he was always pushing to learn more.'
    }
  },
  resume: {
    company1: {
      name: 'Sports Technologies, LLC',
      url: 'http://www.sportstechinc.com',
      jobTitle: 'Front End Developer & UI Designer',
      snippet: 'Design and front end development of fantasy sports apps for NFL, NASCAR, MLS, PGA, NHL and other professional sporting organizations. Increased team organization and consistency by developing SOPs and project workflow documents. Helped save $2500 on internal product branding by introducing LEAN marketing strategies.',
      yearStart: '2013',
      yearEnd: 'Present'
    },
    company2: {
      name: 'ImageWorks, LLC',
      url: 'http://www.imageworksllc.com',
      jobTitle: 'Lead Designer',
      snippet: 'Strategized and implemented systems that decreased design and front end development time by more than 70%. Implemented Lunch-and-Learn Friday to train staff on standards based front end development techniques. Designed and developed projects featured on The Food Network and Hartford Business Journal.',
      yearStart: '2008',
      yearEnd: '2013'
    },
    company3: {
      name: 'Para-Diddle Design, LLC',
      url: '',
      jobTitle: 'UI Designer',
      snippet: 'Responsible for vision, budgeting, marketing/sales and other administrative tasks. Educated local business networking communities on conversion oriented design principles. Increased productivity by training staff on efficient coding and workflow practices.',
      yearStart: '2004',
      yearEnd: '2008'
    }
  }
});
