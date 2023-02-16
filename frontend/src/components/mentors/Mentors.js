import MentorCard from './MentorCard';
import '../../styles/desktop/Mentors.css';
import Arpit_Agrawal from '../../asset/mentors/arpit agrawal.jpeg';
import Dheemant_Agrawal from '../../asset/mentors/dheemant agrawal.jpeg';
import Shekhar_Chander from '../../asset/mentors/shekhar chander sir.jpeg';
import Anil_Kumar from '../../asset/mentors/Anil Sharma.jpeg';

const Mentors = () => {
    const mentor = [
        {
            pfp: Arpit_Agrawal,
            name: 'Sh. Arpit Agrawal',
            designation:
                'Director and Vice President Human Resources @ JECRC University',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/arpitjecrc/',
        },
        {
            pfp: Dheemant_Agrawal,
            name: 'Sh. Dheemant Agrawal',
            designation: 'Head, Digital strategies @ JECRC University',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/dheemantagrawal/',
        },
        {
            pfp: Shekhar_Chander,
            name: 'Shekhar Chander Sir',
            designation: 'Mentor @ JU Makerspace',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/shekhar-chander-263aa86/',
        },
        {
            pfp: Anil_Kumar,
            name: 'Anil Kumar Sir',
            designation: 'Mentor @ JU Makerspace',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/anil-sharma-41084760/',
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
