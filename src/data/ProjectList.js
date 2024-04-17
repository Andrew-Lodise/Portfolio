import wtw1 from "../assets/wtw1.JPG"
import wtw2 from "../assets/wtw2.JPG"
import homepage from "../assets/homepage.JPG"
import skillspage from "../assets/skillspage.JPG"
import stockLookup1 from '../assets/StockLoopup1.JPG'
import stockLookup2 from '../assets/StockLoopup2.JPG'


const ProjectList = [
  {
    title: 'Stock Lookup',
    name: `Stock Lookup`,
    id: 0,
    images: [stockLookup1, stockLookup2],
    tech: ['React', 'Tailwind', 'Javascript', 'AlphaVantage API'],
    description: `This app lists a few of the most well known stocks. The user then can choose a stock and
    redirect that stocks subpage. When it lands on the subpage it will see two graphs showing the stocks
    short term data and long terma data, and some analytics corresponding to that data.`,
    shortDescription: `React app connected to stock API displaying stock data`,
    purpose: `This app was created to be able to quicky observe and learn about popular stocks and
    their patters`,
    codeLink: 'https://github.com/Andrew-Lodise/vite-stock-app.git',
    embedLink: 'https://www.youtube.com/embed/XGFNThva8xc',
  },
  {
    title: 'Outfit Recommender',
    name: `WhatToWear`,
    id: 1,
    images: [wtw1, wtw2],
    tech: ['Python', 'Tkinter', 'REST api', 'Pandas'],
    description: `This app delivers personalized outfit recommendations based on local weather 
    conditions. Users input their city, and through the Open Weather Map API or web scraping, 
    the app retrieves weather data. It then aligns this information with user-defined outfit 
    preferences to suggest the ideal ensemble for the day. This project showcases a blend of 
    practical utility and technical skill, including API integration, data processing, and 
    user-centric design.`,
    shortDescription: `Python program to reccomend a outfit based on todays weather in any location.`,
    purpose: 'This app was created to automate the task of selecting an outfit for the day',
    codeLink: 'https://github.com/Andrew-Lodise/WhatToWear',
    embedLink: 'https://www.youtube.com/embed/sO3RBy5uTPE',
  },
  {
    title: 'Portfolio Website',
    name: `Portfolio`,
    id: 2,
    images: [homepage, skillspage],
    tech: ['React', 'Tailwind','Javascript'],
    description: `This is a React application that uses react components to showcase my projects to future
    employers and/or people that come across it. The homepage text is made using custom css size styling for
    the font in order for the page to be responsive to any zoom/resize of the screen width and heigh. The
    project page uses React Router to redirect the user to a specific page for each project. The skills page
    is made with custom javascript in order to rotate through the tabs of skills.`,
    shortDescription: `React website to showcase skills and projects.`,
    purpose: 'This app was created to display my front-end engineering skills through showcasing my projects',
    codeLink: 'https://github.com/Andrew-Lodise/Portfolio.git',
    embedLink: 'https://www.youtube.com/embed/sbKTMBsuHpk',
  }
]

export default ProjectList