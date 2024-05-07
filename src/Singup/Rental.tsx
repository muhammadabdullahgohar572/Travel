import React from 'react';
import { Footer } from '../components/Lesson no1/Footer';

const RentalsPage = () => {
    return (
        <>
        
        <div className="container mt-[10%] sm:mt-0 mx-auto py-8 px-5">
            <h1 className="text-3xl  font-bold mb-8">Rentals</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Ejemplo de alquiler 1 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://thumbs.dreamstime.com/b/rent-real-estate-sign-front-house-18772828.jpg" alt="Rental 1" className="w-full h-64 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Rental Title 1</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae fringilla velit.</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-lg font-bold">$99/day</span>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Rent Now</button>
                        </div>
                    </div>
                </div>

                {/* Ejemplo de alquiler 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://img.freepik.com/free-vector/house-rent-abstract-concept-vector-illustration-booking-house-online-best-rental-property-real-estate-service-accommodation-marketplace-rental-listing-monthly-rent-abstract-metaphor_335657-1954.jpg" alt="Rental 2" className="w-full h-64 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Rental Title 2</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae fringilla velit.</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-lg font-bold">$129/day</span>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Rent Now</button>
                        </div>
                    </div>
                </div>

                {/* Ejemplo de alquiler 3 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/b44bcee36dc7d7498bd1c5f5b8233d1c-full.jpg" alt="Rental 3" className="w-full h-64 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Rental Title 3</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae fringilla velit.</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-lg font-bold">$149/day</span>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Rent Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[25%] sm:mt-[5%]">
        <Footer />
      </div>
        </>
      
    );
}

export default RentalsPage;
