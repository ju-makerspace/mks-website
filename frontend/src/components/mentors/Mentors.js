import MentorCard from './MentorCard';
import '../../styles/desktop/Mentors.css';

const Mentors = () => {
    return (
        <div className='mentor-sec'>
            <h1 className='mentor-heading'>Meet our Mentors</h1>
            <section className='mentor-matrix'>
                <MentorCard
                    pfp='https://media-exp1.licdn.com/dms/image/C4E03AQGm3_1t34UH9Q/profile-displayphoto-shrink_800_800/0/1530508418899?e=1672272000&v=beta&t=xW53q6p5EoO4jEQT4NUfl3wwV-Wi4jfOb24zqba6VXw'
                    name='Shekhar Chander'
                    designation='Mentor @ JU Makerspace'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
                <MentorCard
                    pfp='https://media-exp1.licdn.com/dms/image/C4E03AQGm3_1t34UH9Q/profile-displayphoto-shrink_800_800/0/1530508418899?e=1672272000&v=beta&t=xW53q6p5EoO4jEQT4NUfl3wwV-Wi4jfOb24zqba6VXw'
                    name='Shekhar Chander'
                    designation='Mentor @ JU Makerspace'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
            </section>
        </div>
    );
};

export default Mentors;
