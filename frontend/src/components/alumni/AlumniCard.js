const AlumniCard = (props) => {
    const { pfp, name, designation, desc, link } = props.data;
    return (
        <a href={link} target='_blank' rel='noreferrer' className='alumni-card'>
            {/* pfp of alumni */}
            <img
                src={pfp}
                alt={name}
                className='alumni-pfp'
                style={{
                    border: '2px solid black',
                    borderRadius: '50rem',
                    height: '80%',
                    width: 'auto',
                    // background: `url(${pfp})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '0rem',
                    margin: 'auto',
                }}
            ></img>
            {/* <img src={pfp} alt={name} /> */}

            {/* name of alumni */}
            <h1 className='alumni-name'>{name}</h1>
            {/* designation at JU MKS */}
            <h3 className='alumni-designation'>{designation}</h3>

            {/* one short description */}
            <q className='alumni-desc'>{desc}</q>
        </a>
    );
};

export default AlumniCard;
