import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about' name="about_us">
      <div className='about-left'>
        <img src={about_img} alt="About Us" className='about-img' />
        <img 
          src={play_icon} 
          alt="Play" 
          className='play-icon' 
          onClick={() => {
            setPlayState(true);
          }} 
        />
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum commodi voluptas atque cumque, nostrum dolores est veritatis beatae facilis, delectus alias aut amet veniam nesciunt vitae facere autem laudantium nulla.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut labore, amet eveniet, perferendis doloremque blanditiis delectus libero architecto non voluptatem totam illum fuga, molestias repudiandae ipsa! Perferendis architecto at tempore!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium eligendi consequuntur vero fugit modi quibusdam autem quasi iusto error, unde dicta fugiat aliquid quae sint voluptate, similique ex vel!</p>
      </div>
    </div>
  );
}

export default About;
