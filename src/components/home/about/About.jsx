import image1 from '../../../assets/image/customar1.png.webp'
import image2 from '../../../assets/image/customar2.png.webp'
const About = () => {
    return (
        <div>
            <div className="hero lg:w-full  w-[300px]  min-h-screen lg:bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' relative px-4 lg:w-full'>
                        <img src={image2} className='w-[400px] lg:ml-36 ml-16 h-[300px] mr-0' alt="" />
                        <img src={image1} className=' w-[500px] absolute top-8 lg:left-30' alt="" />
                    </div>
                    <div className='w-[400px] mt-8 lg:mt-10 lg:mr-8 text-justify lg:w-[900px]'>
                        <h1 className="text-2xl text-orange-400 font-bold">About our company!</h1>
                        <h4 className=' text-4xl font-bold'>Make the customer <br /> the hero of your story</h4>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <p className=' mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem iste nisi enim veritatis, error aliquam. Possimus mollitia, delectus vitae perferendis nesciunt animi eum omnis nulla quam esse sequi, fuga neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta adipisci laudantium saepe placeat facere earum vero eos nesciunt doloremque similique commodi, ut reiciendis veniam sint blanditiis, nam magnam perferendis.</p>
                        <button className="btn mt-8 bg-orange-500 text-white">Learn More</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;