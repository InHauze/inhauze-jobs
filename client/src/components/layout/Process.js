import React from 'react';
import { Link } from 'react-router-dom';

const Process = () => {
    return (
        <section>
            <h1 className="process-h1">How It Works</h1>
            <div className="process-cards">
                <div>
                    <div className="process-card"><i class="far fa-edit process-icon"></i></div>
                    <h3>DESCRIBE YOUR TASK</h3>
                    <p>Tell us what you need done, when and where it works for you.</p>
                </div>
                <div>
                    <div className="process-card"><i class="fas fa-search-dollar process-icon"></i></div>
                    <h3>CHOOSE YOUR TASKER</h3>
                    <p>Browse trusted Taskers by skills, reviews, and price.</p>
                </div>
                <div>
                    <div className="process-card"><i class="fas fa-user-check process-icon"></i></div>
                    <h3>GET IT DONE</h3>
                    <p>Your Tasker arrives and gets the job done, it's that convenient.</p>
                </div>
            </div>
		</section>
    );
};

export default Process;





