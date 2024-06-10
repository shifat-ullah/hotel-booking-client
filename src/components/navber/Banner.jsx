import image from '../../assets/image/home.jpg'
import HeadingText from './HeadingText';
import Search from './Search';
const Banner = () => {
    return (
        <>
            <div className="hero h-[380px] lg:h-[300px] relative" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content mt-0 text-center text-neutral-content">
                    <div className="max-w-5xl">
                       
                        <HeadingText
                        title="Book Your Stay"
                        subtitle="Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis."

                        center={true}
                        ></HeadingText>
                    
                    </div>
                </div>
            </div>

            <div className=' absolute lg:mt-0 mt-12 lg:right-20 w-full mb-5 top-[500px]  lg:bottom-0 lg:w-[1200px] lg:h-[100px] h-[350px]  p-7 mx-auto lg:bg-slate-100'>
                
                    <Search ></Search>
             
            </div>
        </>
    );
};

export default Banner;