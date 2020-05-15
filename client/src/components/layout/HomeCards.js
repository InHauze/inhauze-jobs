import React from 'react';
import { Link } from 'react-router-dom';

const HomeCards = () => {
    return (
        <section class="home-cards">
			<div>
                <div className="card-1"></div>
        		<h3>Baby Sitting</h3>
        		<p>Find trustworthy and affordable part-time and full-time Babysitters available for hire in your area.</p>
			</div>
			<div>
                <div className="card-2"></div>
        		<h3>Cleaning</h3>
        		<p>InHauze, one stop shop, connects people to professional house cleaning and other home services.</p>
			</div>
			<div>
                <div className="card-3"></div>
        		<h3>Tutoring</h3>
        		<p>Our online tutors are ready to help you 24/7. Private lessons with the expert instructor of your choice.</p>
			</div>
            <div>
                <div className="card-4"></div>
                <h3>Book Keeping</h3>
        		<p>Tax and accounting for US and international businesses. One-stop shop for all your business needs.</p>
			</div>
		</section>
    );
};

export default HomeCards;





