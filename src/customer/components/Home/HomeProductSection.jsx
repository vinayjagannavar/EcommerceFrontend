import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeProductCard from './HomeProductCard';
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeProductSection = ({data,section}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        0: {
            items: 2,
            itemsFit: "contain",
        },
        568: {
            items: 3,
            itemsFit: "contain",
        },
        1024: {
            items: 5.5,
            itemsFit: "contain",
        },
    };

    const items = data.slice(0, 10).map((item) => <HomeProductCard product={item} />);

    const slidePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
            if (carouselRef.current) {
                carouselRef.current.slidePrev();
            }
        }
    };

    const slideNext = () => {
        if (activeIndex < items.length - 1) {
            setActiveIndex((prevIndex) => prevIndex + 1);
            if (carouselRef.current) {
                carouselRef.current.slideNext();
            }
        }
    };

    const handleSlideChange = ({ item }) => {
        setActiveIndex(item);
    };

    return (
        <div className='relative px-4 sm:px-6 lg:px-8'>
            <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
            <div className='relative p-5 border'>
                <AliceCarousel
                    ref={carouselRef}
                    disableButtonsControls
                    disableDotsControls
                    mouseTracking
                    items={items}
                    activeIndex={activeIndex}
                    responsive={responsive}
                    onSlideChanged={handleSlideChange}
                    animationType="fadeout"
                    animationDuration={2000}
                />
                {activeIndex < items.length - Math.ceil(responsive[1024].items) && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                    </Button>
                )}

                {activeIndex > 0 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(50%) rotate(-90deg)',
                            bgcolor: "white",
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeProductSection;
