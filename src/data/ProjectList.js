import wtw1 from "../assets/wtw1.JPG"
import wtw2 from "../assets/wtw2.JPG"
import homepage from "../assets/homepage.JPG"
import skillspage from "../assets/skillspage.JPG"

const ProjectList = [
  {
    title: 'Outfit Recommender',
    images: [wtw1, wtw2],
    tech: ['Python', 'Tkinter', 'REST api', 'Pandas'],
    description: `This app delivers personalized outfit recommendations based on local weather 
    conditions. Users input their city, and through the Open Weather Map API or web scraping, 
    the app retrieves weather data. It then aligns this information with user-defined outfit 
    preferences to suggest the ideal ensemble for the day. This project showcases a blend of 
    practical utility and technical skill, including API integration, data processing, and 
    user-centric design.`,
    codeLink: 'https://github.com/Andrew-Lodise/WhatToWear',
    demoLink: 'https://www.youtube.com/channel/UCZDvNqdyxfH1svEnaBV45Cw'
  },
  {
    title: 'Portfolio Website',
    images: [homepage, skillspage],
    tech: ['React', 'Tailwind','Javascript'],
    description: `I created this website to demonstrate my eagerness and capacity to 
    break into the software development field. Starting with little knowledge in web 
    development, I've rapidly scaled my skills through this very project. It showcases 
    my dedication to learning new technologies and my ability to quickly adapt, offering 
    a window into my potential as a future software developer.`,
    codeLink: 'https://github.com/Andrew-Lodise/Portfolio.git',
    demoLink: 'https://www.youtube.com/channel/UCZDvNqdyxfH1svEnaBV45Cw'
  }
]

export default ProjectList