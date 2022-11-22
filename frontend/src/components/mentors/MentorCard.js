const MentorCard = (props) => {
    const { pfp, name, designation, desc, link } = props.data;
    return (
        <a href={link} target='_blank' className='mentor-card'>
            {/* pfp of mentor */}
            <div className="mentor-pfp"
                style={{
                    border: '2px solid black',
                    borderRadius: '50rem',
                    height: '3rem',
                    width: '3rem',
                    background: `url(${pfp})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '8rem',
                    margin: 'auto',
                }}
            ></div>

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
