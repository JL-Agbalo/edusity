import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Title from "./Components/Title/Title"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title 
          subTitle='Our Program' 
          title='What We Offer' 
        />
        <Programs/>
        <About/>
        <Title 
          subTitle='Gallery' 
          title='Campus Photos' 
        />
        <Campus/>
        <Title 
          subTitle='Testimonials' 
          title='What Student Says' 
        />
      </div>
    </div>
  )
}

export default App