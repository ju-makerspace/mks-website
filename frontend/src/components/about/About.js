import '../../styles/desktop/About.css';
import Event from './Event';

const About = () => {
    return (
        <div>
            <section className='about-sec'>
                <p className='about-heading'>
                    More about <span>JU Makerspace</span>
                </p>
                <p className='about-content'>
                    <ul>
                        <li>
                            <strong>MAKERSPACE</strong> is a gravitating concept
                            in India which provides students a platform to
                            showcase their innovatory ideas and turn them into
                            reality. Rajasthan's first Makerspace was unfurled
                            in JECRC University and was inaugurated by Mr.
                            Hastikaji, Vice president, TCS on 16th August 2018.
                        </li>
                        <li>
                            <strong>JU MAKERSPACE</strong> welcomes people,
                            irrespective of their education qualifications, age
                            or gender as there are only afew such facilities
                            open in India. A handful of equipment and tools are
                            present, including the rare digital oscilloscope,
                            common ICs and transistors.
                        </li>
                        <li>
                            In addition to that, it is North India's{' '}
                            <b>first Student driven Makerspace community</b>. In
                            JU Makerspace students practise their hands on many
                            different things like 3D modelling, Robotics,
                            electronics, Wood working, art, prop making, etc. It
                            works on only one ideology, limitation to a student
                            is his own imagination.
                        </li>
                    </ul>
                </p>
            </section>
            <section className='past-events'>
                <p className='past-events-heading'>Past Events ✨</p>
                <Event title='Event-1' desc='This is Event 1' />
                <Event title='Event-2' desc='This is Event 2' />
                <Event title='Event-3' desc='This is Event 3' />
            </section>
        </div>
    );
};

export default About;
