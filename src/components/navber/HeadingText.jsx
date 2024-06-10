/* eslint-disable react/prop-types */


const HeadingText = ({ title, subtitle, center }) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className='className="mb-5 text-7xl font-bold'>{title}</div>
            <div className='mb-2 text-xl mt-2'>{subtitle}</div>
        </div>
    );
};

export default HeadingText;