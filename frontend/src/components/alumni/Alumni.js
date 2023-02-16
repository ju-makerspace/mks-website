import AlumniCard from './AlumniCard';
import '../../styles/desktop/Alumni.css';
import naveen_kumar from '../../asset/alumni/naveen kumar.jpeg';
import pradeep_kumar from '../../asset/alumni/destroja praddep kumar.jpeg';
import devendra_suthar from '../../asset/alumni/devendra suthar.jpeg';
import shubham_singh from '../../asset/alumni/shubham singh.jpeg';
import aditya_tiwari from '../../asset/alumni/aditya tiwari.jpeg';
import akshat_jain from '../../asset/alumni/akshat jain.jpeg';
import wasim_parsani from '../../asset/alumni/wasim parsani.jpeg';
import ayushi_bansal from '../../asset/alumni/ayushi bansal.jpeg';
import kavisha_manchanda from '../../asset/alumni/kavisha manchanda.jpeg';

const Alumni = () => {
    const alum = [
        {
            pfp: naveen_kumar,
            name: 'Naveen Kumar',
            designation: 'SDE1 @ HPE',
            desc: 'JU Makerspace is a space with no restrictions and limitations',
            link: 'https://www.linkedin.com/in/1501naveenkumar/',
        },
        {
            pfp: pradeep_kumar,
            name: 'Detroja Pradeep Kumar',
            designation:
                'Masters in Advanced Computer Science @ The University of Sheffield, UK',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/detroja-pradeep-kumar/',
        },
        {
            pfp: devendra_suthar,
            name: 'Devendra Suthar',
            designation: 'Assistant System Engineer @ TCS',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/linkdev/',
        },
        {
            pfp: shubham_singh,
            name: 'Shubham Singh',
            designation: 'Systems Software Engineer 1 @ HPE',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/shubham-singh-974d/',
        },
        {
            pfp: aditya_tiwari,
            name: 'Aditya Tiwari',
            designation: 'Software Engineer @ Intuit',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/tiwari-aditya/',
        },
        {
            pfp: akshat_jain,
            name: 'Akshat Jain',
            designation: 'Masters @ The University of Sheffield, UK',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/i-akshat-jain/',
        },
        {
            pfp: wasim_parsani,
            name: 'Wasim Parsani',
            designation: 'SDE @ Amazon',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/wasim-parsani-78385b185/',
        },
        {
            pfp: ayushi_bansal,
            name: 'Ayushi Bansal',
            designation: 'Support Engineer @ Amazon',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/ayushi-bansal-152974212/',
        },
        {
            pfp: kavisha_manchanda,
            name: 'Kavisha Manchanda',
            designation: 'Senior Analyst @ Capgemini',
            desc: 'Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.linkedin.com/in/kavisha-manchanda-75b7711b1/',
        },
    ];

    return (
        <div className='alumni-sec'>
            <h1 className='alumni-heading'>Have a look at our Alumni</h1>

            <section className='alumni-matrix'>
                {alum.map((item, i) => (
                    <AlumniCard data={item} />
                ))}

                {/* 
                <AlumniCard
                    pfp='https://media-exp1.licdn.com/dms/image/C4E03AQFePPekkFqXyw/profile-displayphoto-shrink_800_800/0/1633499585281?e=1672272000&v=beta&t=M6Nu74w6hYqtgxTK902kcijoHWtC1udV5emG0fCRGqw'
                    name='Kavisha Manchanda'
                    designation='Front-End Developer'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                /> */}
            </section>
        </div>
    );
};

export default Alumni;
