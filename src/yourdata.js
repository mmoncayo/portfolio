import "./assets/achilles-heel.png"

export default
    {
        name :'matt moncayo.',
        headerTagline: [
                        'Hi 👋 Welcome to my page! I\'m Matt.',
                        'Engineer',
                        'from San Diego'
    ],

        contactEmail:'matthew.moncayo@gmail.com',

        abouttext: "I'm currently a Senior RF Engineer working in telecom with a background in cellular coverage enhancement. My hopes are that becoming a full stack web developer will elevate my skillset to handle the potential that the 5G era will bring with new software and data revelations. We have shown how reliable we are to the growth of technology and my goal is with the blend of both my telecom background and web development experience, the potential for tech innovations is limitless. Other hobbies I'm passionate about are puzzles, my love for IPAs, and running.",
        aboutImage:'https://github.com/mmoncayo/ResponsivePortfolio/blob/master/18237940_10156135551829676_6443445171995656807_o.jpg?raw=true&auto=format&fit=crop&w=500&q=60',

       ShowAboutImage:true,

       projects:[
           {
            id: 1,
            title:'Achilles\' Heel', 
             service:'Interactive game learning about Ancient Greek times using React', 

             imageSrc:"https://github.com/erin-smith/Achilles-heel/blob/master/client/src/assets/achilles_heel_logo3.png?raw=true",
 
             url:'https://achilles-heel.herokuapp.com'
            },
            {
                id: 2,
                title: 'Skip To The Loo',
                service: 'Full stack app functioning as a bathroom mapper using Google Maps API',
                imageSrc: "https://github.com/mmoncayo/ResponsivePortfolio/blob/master/assets/Skip-To-The-Loo.png?raw=true",
                url: 'https://skip-to-the-loo.herokuapp.com/'
            },
            { 
                id: 3,
                title: 'Workout Tracker',
                service: 'Full Stack Fitness Tracker using MongoDB as a database',
                imageSrc: "https://github.com/mmoncayo/workout-tracker/blob/master/assets/demo_screenshot.png?raw=true&auto=format&fit=crop&w=500&q=60",
                url: 'https://shrouded-island-71734.herokuapp.com/'
            },
            {
                id: 4,
                title: 'Work Day Scheduler',
                service: 'Client side work day scheduler using local storage',
                imageSrc: "https://github.com/mmoncayo/ResponsivePortfolio/blob/master/assets/Work%20Day%20Planner.png?raw=true&auto=format&fit=crop&w=500&q=60",
                url: 'https://mmoncayo.github.io/WorkDayPlanner/'
           }

        ],
        social: [

            {   name:'GitHub',
                url:'https://github.com/mmoncayo'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/matthewmoncayo/'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/moncayooo/'
            },
            {
                name: 'Resume',
                url: 'https://drive.google.com/file/d/1Kntyfba0IV857IE8p2HRjFrb6WXhoZn2/view?usp=sharing'
            }

        ]
    }