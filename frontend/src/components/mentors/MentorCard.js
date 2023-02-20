const MentorCard = (props) => {
    const { pfp, name, designation, desc, link } = props.data;
    return (
        <a href={link} target='_blank' rel='noreferrer' className='mentor-card'>
            {/* pfp of mentor */}
            <img
                src={pfp}
                alt={name}
                className='mentor-pfp'
                style={{
                    border: '2px solid black',
                    borderRadius: '50rem',
                    height: '60%',
                    width: 'auto',
                    // background: `url(${pfp})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '0rem',
                    margin: 'auto',
                }}
            ></img>

            {/* name of mentor */}
            <h1 className='mentor-name'>{name}</h1>
            {/* designation at JU MKS */}
            <h3 className='mentor-designation'>{designation}</h3>

            {/* one short description */}
            <p className='mentor-desc'>{desc}</p>
        </a>
    );
};

export default MentorCard;
