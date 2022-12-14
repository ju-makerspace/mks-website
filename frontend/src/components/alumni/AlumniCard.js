const AlumniCard = (props) => {
    const { pfp, name, designation, desc, link } = props.data;
    return (
        <a href={link} target='_blank' className='alumni-card'>
            {/* pfp of alumni */}
            <div
                className='alumni-pfp'
                style={{
                    border: '2px solid black',
                    borderRadius: '50rem',
                    height: '1rem',
                    width: '1rem',
                    background: `url(${pfp})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '5rem',
                    margin: 'auto',
                }}
            ></div>

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
