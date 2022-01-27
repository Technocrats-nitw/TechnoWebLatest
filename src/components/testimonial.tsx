import React from "react";
import ScrollAnimation from "react-animate-on-scroll"
import '../assets/styles/testimonial.css'
import TestimonialCards from "./testimonial-cards"

// add like this here 
// do not change key names
// do not touch the first element
const testimonials = [
    {
        name: '<Value>',
        img: '<Value>',
        testimonial : "<Value>",
        title: '<Value>',
        college: '<Value>'

    },

    // {
    //     name: 'Sufiyan Ansari',
    //     img: 'https://avatars.githubusercontent.com/u/28235081?v=4',
    //     testimonial : "Very professional and excellent response from the team, I recommend everyone to use their service and get their projects done",
    //     title: 'Founder Technocrats',
    //     college: 'National Institute of Technology'

    // },
    // {
    //     name: 'Elon Musk',
    //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjh1lEW2yiQqS4JENSsrEIAS9RSEiJ5-uZq8v0-eBTpjU7X9dZhPr0HI5yT22am0kbTWE&usqp=CAU',
    //     testimonial : "Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.",
    //     title: 'Founder Tesla, SpaceX',
    //     college: 'American College of Wierdos'

    // },
    // {
    //     name: 'Elon Musk',
    //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjh1lEW2yiQqS4JENSsrEIAS9RSEiJ5-uZq8v0-eBTpjU7X9dZhPr0HI5yT22am0kbTWE&usqp=CAU',
    //     testimonial : "Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.",
    //     title: 'Founder Tesla, SpaceX',
    //     college: 'American College of Wierdos'

    // },
    // {
    //     name: 'Sufiyan Ansari',
    //     img: 'https://avatars.githubusercontent.com/u/28235081?v=4',
    //     testimonial : "Very professional and excellent response from the team, I recommend everyone to use their service and get their projects done",
    //     title: 'Founder Technocrats',
    //     college: 'National Institute of Technology'

    // }
]

function Testimonial(){
  if(testimonials.length == 1)
      return(<></>);
  return(
    <>
      {/* Feedbacks */}
      <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000} animateOnce={true}>
      <div style={{margin:'10% auto 0 auto', color:'#0f0f0f'}}>
        <h1 id="happycustomer">Our Happy Clients</h1>
      </div>
      </ScrollAnimation>
      <div style={{maxWidth: '100vh', margin: '2% auto 0 auto', paddingTop: '80px', paddingBottom: '80px'}}> 
        {testimonials.map((item, index) => {
            if(index === 0) {
                return <></>
            }
            var direction = index%2 === 0 ? 'left' : 'right';
              return(
                  <TestimonialCards item = {item} direction = {direction} />
              )
        })}          
      </div>
    </>
  )
}

export default Testimonial;