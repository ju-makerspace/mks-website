import MentorCard from './MentorCard';
import '../../styles/desktop/Mentors.css';

const Mentors = () => {
    return (
        <div className='mentor-sec'>
            <h1 className='mentor-heading'>Meet our Mentors</h1>
            <section className='mentor-matrix'>
                <MentorCard
                    pfp='https://media-exp1.licdn.com/dms/image/C5603AQGVwEOpRkHVhg/profile-displayphoto-shrink_800_800/0/1573826801260?e=1672272000&v=beta&t=nq24O8-Tw4pmIBlWOY9ZEsmS_K1tY4gOUt_qV_M-Yu0'
                    name='Dheemant Agrawal'
                    designation='Head, Digital strategies, JECRC University'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
                    <MentorCard
                        pfp='https://media-exp1.licdn.com/dms/image/C5603AQE4EqCGT4YLRA/profile-displayphoto-shrink_800_800/0/1517882785722?e=1672272000&v=beta&t=rlVsR45ipCNJ0s6IidyJngKhNLguMDeJ9lOQTBJ1cZw'
                        name='Mohit Joher'
                        designation='Founder of JU Makerspace'
                        desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                    />
                <MentorCard
                    pfp='https://media-exp1.licdn.com/dms/image/C4E03AQGm3_1t34UH9Q/profile-displayphoto-shrink_800_800/0/1530508418899?e=1672272000&v=beta&t=xW53q6p5EoO4jEQT4NUfl3wwV-Wi4jfOb24zqba6VXw'
                    name='Shekhar Chander'
                    designation='Mentor @ JU Makerspace'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
                <MentorCard
                    pfp='https://media-exp1.licdn.com/dms/image/C5603AQF80tIgpb0i0A/profile-displayphoto-shrink_800_800/0/1647882585384?e=1672272000&v=beta&t=8r97cBKrRm0oJoXG7suZQXxI-8IskihOs4-mm_dIEr8'
                    name='Anil Kumar'
                    designation='Mentor @ JU Makerspace'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
            </section>
        </div>
    );
};

export default Mentors;