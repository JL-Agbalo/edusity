import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useRef, useState, useEffect } from 'react';

// Define an array of user data
const userData = [
    { img: user_1, name: "William Jackson", company: "Edusity, USA", testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Detationem perspiciatis, nobis aspernatur ad mollitia at repudiandae non repellendus." },
    { img: user_2, name: "Marta Lustra", company: "Edusity, USA", testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Detationem perspiciatis, nobis aspernatur ad mollitia at repudiandae non repellendus." },
    { img: user_3, name: "Mario Castro", company: "Edusity, USA", testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Detationem perspiciatis, nobis aspernatur ad mollitia at repudiandae non repellendus." },
    { img: user_4, name: "William Jackson", company: "Edusity, USA", testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias in eaque consequatur doloremque fugiat necessitatibus a quos minus." },
    { img: user_4, name: "William Jackson", company: "Edusity, USA", testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias in eaque consequatur doloremque fugiat necessitatibus a quos minus." }
];

function Testimonials() {
    const slider = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (slider.current) {
            const slideWidth = 100 / Math.ceil(userData.length / 2); // Two rows per slide
            slider.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        }
    }, [currentIndex]);

    const slideForward = () => {
        if (currentIndex < Math.ceil(userData.length / 2) - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const slideBackward = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    // Group testimonials into pairs
    const slides = [];
    for (let i = 0; i < userData.length; i += 2) {
        slides.push(userData.slice(i, i + 2));
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider} className="slides" style={{ width: `${slides.length * 100}%` }}>
                    {slides.map((slide, slideIndex) => (
                        <li key={slideIndex} className="slide-group">
                            {slide.map((user, index) => (
                                <div key={index} className="slide">
                                    <div className="user-info">
                                        <img src={user.img} alt={`User ${index + 1}`} />
                                        <div>
                                            <h3>{user.name}</h3>
                                            <span>{user.company}</span>
                                        </div>
                                    </div>
                                    <p>{user.testimonial}</p>
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Testimonials;