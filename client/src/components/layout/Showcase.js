import React from 'react';
import { Link } from 'react-router-dom';

const Showcase = () => {
    return (
        <header className="showcase">
            <h2>The convenient & affordable way to get things done around the home.</h2>
            <p>The easy, reliable way to take care of your home.</p>
            <div class="buttons">
                    <Link to="/babysitting" className="btn btn-showcase">
                        Baby Sitting <i class="fas fa-baby"></i>
                    </Link>
                    <Link to="/cleaning" className="btn btn-showcase">
                        Cleaning <i class="fas fa-broom"></i>
                    </Link>
                    <Link to="/tutoriung" className="btn btn-showcase">
                        Tutoring <i class="fas fa-chalkboard-teacher"></i>
                    </Link>
                    <Link to="/bookkeeping" className="btn btn-showcase">
                        Book Keeping <i class="fas fa-book"></i>
                    </Link>
            </div>
        </header>
    );
};

export default Showcase;





