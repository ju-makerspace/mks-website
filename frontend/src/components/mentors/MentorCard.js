const MentorCard = (props) => {
    const pfp = props.pfp;
    const name = props.name;
    const designation = props.designation;
    const desc = props.desc;
    return (
        <div className='mentor-card'>
            {/* pfp of mentor */}
            <div
                style={{
                    border: '2px solid black',
                    borderRadius: "10rem",
                    height: '15rem',
                    width: '15rem',
                    background: `url(${pfp})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

            {/* name of mentor */}
            <h1 className="mentor-name">{name}</h1>
            {/* designation at JU MKS */}
            <h3 className="mentor-designation">{designation}</h3>

            {/* one short description */}
            <p className="mentor-desc">{desc}</p>
        </div>
    );
};

export default MentorCard;
