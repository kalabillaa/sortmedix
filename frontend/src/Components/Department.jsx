import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Department = () => {
    const departmentsArray = [
        {
            name: "Pediatrics",
            imageUrl: "/departments/pedia.jpg",
        },
        {
            name: "Orthopedics",
            imageUrl: "/departments/ortho.jpg",
        },
        {
            name: "Cardiology",
            imageUrl: "/departments/cardio.jpg",
        },
        {
            name: "Neurology",
            imageUrl: "/departments/neuro.jpg",
        },
        {
            name: "Oncology",
            imageUrl: "/departments/onco.jpg",
        },
        {
            name: "Radiology",
            imageUrl: "/departments/radio.jpg",
        },
        {
            name: "Physical Therapy",
            imageUrl: "/departments/therapy.jpg",
        },
        {
            name: "Dermatology",
            imageUrl: "/departments/derma.jpg",
        },
        {
            name: "ENT",
            imageUrl: "/departments/ent.jpg",
        },
    ];

    const responsive = {
        extraLarge: {
            breakpoint: { max: 3000, min: 1324 },
            items: 4,
            slidesToSlide: 1, 
        },
        large: {
            breakpoint: { max: 1324, min: 1005 },
            items: 3,
            slidesToSlide: 1, 
        },
        medium: {
            breakpoint: { max: 1005, min: 700 },
            items: 2,
            slidesToSlide: 1, 
        },
        small: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
            slidesToSlide: 1, 
        },
    };

    return (
        <>
            <div className="container mx-auto py-8">
                <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">Our Departments</h2>
                <Carousel
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    keyBoardControl
                    transitionDuration={500}
                    className="px-4"
                >
                    {departmentsArray.map((depart, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-4 mx-2 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                <img
                                    src={depart.imageUrl}
                                    alt={depart.name}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                                <div className="text-center mt-4">
                                    <h3 className="text-xl font-semibold text-gray-700">{depart.name}</h3>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Department;
