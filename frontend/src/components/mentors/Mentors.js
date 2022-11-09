import MentorCard from './MentorCard';
import '../../styles/desktop/Mentors.css';

const Mentors = () => {
    const mentor = [
        {
            pfp: 'https://media-exp1.licdn.com/dms/image/C4D03AQFIhHszXY1z0Q/profile-displayphoto-shrink_800_800/0/1661217703187?e=1672272000&v=beta&t=hj_cNMFYkCtdRCGMC73k0UxC6i-WB6K_C6x2wTA8DBs',
            name: 'Arpit Agrawal',
            designation:
                'Director and Vice President Human Resources @ JECRC University',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/arpitjecrc/',
        },
        {
            pfp: 'https://media-exp1.licdn.com/dms/image/C5603AQGVwEOpRkHVhg/profile-displayphoto-shrink_800_800/0/1573826801260?e=1672272000&v=beta&t=nq24O8-Tw4pmIBlWOY9ZEsmS_K1tY4gOUt_qV_M-Yu0',
            name: 'Dheemant Agrawal',
            designation: 'Head, Digital strategies @ JECRC University',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/dheemantagrawal/',
        },
        {
            pfp: 'https://media-exp1.licdn.com/dms/image/C4E03AQGm3_1t34UH9Q/profile-displayphoto-shrink_800_800/0/1530508418899?e=1672272000&v=beta&t=xW53q6p5EoO4jEQT4NUfl3wwV-Wi4jfOb24zqba6VXw',
            name: 'Shekhar Chander',
            designation: 'Mentor @ JU Makerspace',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/shekhar-chander-263aa86/',
        },
        {
            pfp: 'https://media-exp1.licdn.com/dms/image/C4D03AQFIhHszXY1z0Q/profile-displayphoto-shrink_800_800/0/1661217703187?e=1672272000&v=beta&t=hj_cNMFYkCtdRCGMC73k0UxC6i-WB6K_C6x2wTA8DBs',
            name: 'Anil Kumar',
            designation: 'Mentor @ JU Makerspace',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/anil-kumar-41084760/',
        },
        {
            pfp: 'https://media-exp1.licdn.com/dms/image/C5603AQE4EqCGT4YLRA/profile-displayphoto-shrink_800_800/0/1517882785722?e=1672272000&v=beta&t=rlVsR45ipCNJ0s6IidyJngKhNLguMDeJ9lOQTBJ1cZw',
            name: 'Mohit Joher',
            designation: 'Founder of JU Makerspace',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/johermohit/',
        },
        {
            pfp: 'https://media-exp1.licdn.com/dms/image/C4D03AQFCEmvryyn5Qw/profile-displayphoto-shrink_800_800/0/1653842262940?e=1672272000&v=beta&t=sTLrNmWH78XZST3WeYi9eRcZ2elt_ORRgz1OalzOqwU',
            name: 'Chitranshu Nagora',
            designation: 'President @ JU Makerspace',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/chitranshu-nagora-648a001b7/',
        },
    ];
    return (
        <div className='mentor-sec'>
            <h1 className='mentor-heading'>Meet our Mentors</h1>
            <section className='mentor-matrix'>
                {mentor.map((item, i) => (
                    <MentorCard data={item} />
                ))}
            </section>
        </div>
    );
};

export default Mentors;
