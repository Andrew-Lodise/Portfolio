import wtw1 from "../assets/wtw1.JPG"
import wtw2 from "../assets/wtw2.JPG"
import homepage from "../assets/homepage.JPG"
import skillspage from "../assets/skillspage.JPG"
import pup1 from "../assets/pup1.PNG"
import pup3 from "../assets/pup3.PNG"

const ProjectList = [
  {
    title: 'Outfit Recommender',
    images: [wtw1, wtw2],
    tech: ['Python', 'Tkinter', 'REST api', 'Pandas'],
    description: `This app recommends outfits based on the weather data.
    The user enters the city they are in and then generates an outfit for 
    the day. allows a user to search for weather data for 
    any location in the world using either a REST api (Open Weather Map) 
    or by scraping the data from google. Based off the weather data and 
    outfits input by the user, it gives an outfit reccomendation.`,
    codeLink: 'https://github.com/Andrew-Lodise/WhatToWear',
    demoLink: 'https://www.youtube.com/channel/UCZDvNqdyxfH1svEnaBV45Cw'
  },
  {
    title: 'Portfolio Website',
    images: [homepage, skillspage],
    tech: ['React', 'Tailwind','Javascript'],
    description: `I made this website to show my future employers that I am determinded
    to enter the software development market and I'm not afraid to learn new technologies.
    Before building this I new little about web development but I've learned so much just by
    making this project.`,
    codeLink: 'https://github.com/Andrew-Lodise/Portfolio.git',
    demoLink: 'https://www.youtube.com/channel/UCZDvNqdyxfH1svEnaBV45Cw'
  }, 
  {
    title: 'Stock Predictor CLI Tool',
    images: [pup3, pup1],
    tech: ['Python', 'Matplotlib','Pandas', 'Numpy'],
    description: `This app uses alpaca stock api to gather data of a given stock
    it then goes through multiple steps of data analysis to output information
    reguarding if the desired stock is fit for a long term, or short term investment`,
    codeLink: 'https://github.com/Andrew-Lodise/AlpacaTradingBot.git',
    demoLink: 'https://www.youtube.com/channel/UCZDvNqdyxfH1svEnaBV45Cw'
  },
]

export default ProjectList