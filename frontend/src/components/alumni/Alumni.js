import AlumniCard from './AlumniCard';
import '../../styles/desktop/Alumni.css';

const Alumni = () => {
    return (
        <div className='mentor-sec'>
            <h1 className='mentor-heading'>Have a look at our Alumni</h1>
            <section className='mentor-matrix'>
                <AlumniCard
                    pfp='https://media-exp1.licdn.com/dms/image/C4D03AQHzv9XDyFuBKw/profile-displayphoto-shrink_800_800/0/1662620499006?e=1672272000&v=beta&t=AFjt4poc8W_wJv0z9LHUO1kUOe1sTcbhQej03oseZMg'
                    name='Naveen Kumar'
                    designation='SDE1 @ HPE'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
                <AlumniCard
                    pfp='https://media-exp1.licdn.com/dms/image/D5603AQG38SPXhYr3Pg/profile-displayphoto-shrink_800_800/0/1639333076231?e=1672272000&v=beta&t=DlYdIpZ9dtf9WdbVaUveXcLEbpv8xcQOT5zbEREz2E8'
                    name='Detroja Pradeep Kumar'
                    designation='Intern @SAC (ISRO)'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
                <AlumniCard
                    pfp='https://media-exp1.licdn.com/dms/image/C4D03AQE5SBmapyOq-A/profile-displayphoto-shrink_800_800/0/1658212191966?e=1672272000&v=beta&t=-AEaeFpt46XENhl-EDp7aGhOkFxwPkGsLSy5D02OA2I'
                    name='Aditya Tiwari'
                    designation='Software Engineer @ Intuit'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
                <AlumniCard
                    pfp='https://media-exp1.licdn.com/dms/image/C4D03AQERVsS18eUpUQ/profile-displayphoto-shrink_800_800/0/1643043410579?e=1672272000&v=beta&t=03iTJaTsE8BehSj5PH-XZ9-0o84jcS_pE8Q-kxN5eLI'
                    name='Wasim Parsani'
                    designation='SDE @ Amazon'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
                <AlumniCard
                    pfp='https://media-exp1.licdn.com/dms/image/C4D03AQGOA37tQFm6Dg/profile-displayphoto-shrink_800_800/0/1642570115254?e=1672272000&v=beta&t=uK7kfFONRwp0ItY1gc5BJ_B8H4HIG-o2YXbnW4YVqDs'
                    name='Ayushi Bansal'
                    designation='Support Engineer @ Amazon'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
                <AlumniCard
                    pfp='https://media-exp1.licdn.com/dms/image/C4E03AQFePPekkFqXyw/profile-displayphoto-shrink_800_800/0/1633499585281?e=1672272000&v=beta&t=M6Nu74w6hYqtgxTK902kcijoHWtC1udV5emG0fCRGqw'
                    name='Kavisha Manchanda'
                    designation='Front-End Developer'
                    desc='Lorem ipsum dolor sit tempor incididunt ut labore et dolore magna aliqua.'
                />
            </section>
        </div>
    );
};

export default Alumni;
