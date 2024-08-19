import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, possimus exercitationem! Voluptas voluptatibus quaerat non, consectetur omnis et similique minus, fuga autem velit deleniti unde maiores fugiat iure natus.</p>
            <button className='btn'>Explore more <img src={darkArrow} alt="" /></button>
        </div>
        </div>
  )
}

export default Hero