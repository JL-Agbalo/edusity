import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'


function Testimonials() {
    
    const slider = useRef();
    let translateX = 0;

    const slideForward = ()=> {
        if(translateX > - 60){
            translateX-=60;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }
    
    const slideBackward = ()=> {
        if(translateX < 0){
            translateX +=60;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }
    

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Detationem perspiciatis, nobis aspernatur ad mollitia at repudiandae non repellendus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Marta Lustra</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Detationem perspiciatis, nobis aspernatur ad mollitia at repudiandae non repellendus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Mario Castro</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Detationem perspiciatis, nobis aspernatur ad mollitia at repudiandae non repellendus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias in eaque consequatur doloremque fugiat necessitatibus a quos minima saepe exercitationem perspiciatis, nobis aspernatur ad mollitia at repudiandae non repellendus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Lester Manigil</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias in eaque consequatur doloremque fugiat necessitatibus a quos minima saepe exercitationem perspiciatis, nobis aspernatur ad mollitia at repudiandae non repellendus.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials