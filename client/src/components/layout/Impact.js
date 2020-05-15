import React from 'react';
import { Link } from 'react-router-dom';

const Impact = () => {
    return (
        <section class="impact">
			<div class="content">
                <h2>We love making good impact on daily lives of people</h2>
                <Link to="/booking" class="btn">
                    Get Our Service <i class="fas fa-chevron-right"></i>
                </Link>
			</div>
		</section>
    );
};

export default Impact;





