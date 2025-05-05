import React, { useContext, useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaLightbulb, FaThumbsUp, FaThumbsDown, FaCalendarAlt } from 'react-icons/fa';
import { UserContext } from '../../context/AuthContext.jsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Component
const CustomArrow = ({ className, style, onClick, direction }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      background: "blue",
      borderRadius: "50%",
      zIndex: 1,
    }}
    onClick={onClick}
  />
);

const SuggestionCardList = () => {
  const { suggestion } = useContext(UserContext);
  const [likes, setLikes] = useState(Array(10).fill(0));
  const [dislikes, setDislikes] = useState(Array(10).fill(0));

  const handleLike = (index) => {
    const updated = [...likes];
    updated[index] += 1;
    setLikes(updated);
  };

  const handleDislike = (index) => {
    const updated = [...dislikes];
    updated[index] += 1;
    setDislikes(updated);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  if (!Array.isArray(suggestion)) {
    return <div className="text-center text-red-500">Loading suggestions...</div>;
  }

  return (
    <div className='w-full  bg-green-50 py-10 px-5'>
      <div className='text-center pb-10'>
        <h1 className='font-bold text-3xl text-green-600 underline'>All Users Suggestions</h1>
      </div>

      <div className='mx-10'>
        <Slider {...settings}>
          {suggestion.map((item, index) => (
            <div key={index} className='px-3 text-[1.1rem]'>
              <div className='bg-white shadow-md rounded-xl p-5 h-[300px] flex flex-col justify-between hover:shadow-lg transition-all duration-300'>
                <div className='flex flex-col gap-2 mb-3'>
                  <div className='flex items-center gap-2 text-green-600 font-semibold'>
                    <FaUser /> {item.name}
                  </div>
                  <div className='flex items-center gap-2 text-green-500 text-sm'>
                    <FaMapMarkerAlt /> {item.village}
                  </div>
                  <div className='flex items-center gap-2 text-gray-500 text-sm'>
                    <FaCalendarAlt /> {new Date(item.date).toISOString().split('T')[0]}
                  </div>
                </div>

                <div className='flex items-start gap-2 text-gray-700 mb-4 flex-grow overflow-y-auto'>
                  <FaLightbulb className='mt-1 text-yellow-400 text-[1.65rem]' />
                  <p>{item.suggestion}</p>
                </div>

                <div className='flex justify-between items-center text-[1rem] '>
                  <button
                    onClick={() => handleLike(index)}
                    className='flex items-center gap-1 text-green-600 hover:text-green-700 hover:text-[1.1rem] transition-all'
                  >
                    <FaThumbsUp /> {likes[index]}
                  </button>
                  <button
                    onClick={() => handleDislike(index)}
                    className='flex items-center gap-1 text-red-600 hover:text-red-700 hover:text-[1.1rem] transition-all'
                  >
                    <FaThumbsDown /> {dislikes[index]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
       
      </div>
      {/* <div>
        <h1>jkjhkkkkkkhkhjkhkhnkhn</h1>
       </div> */}
    </div>
  );
};

export default SuggestionCardList;
