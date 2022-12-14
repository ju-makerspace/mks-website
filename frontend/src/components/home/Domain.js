import '../../styles/desktop/home/Domain.css';

const Domain = () => {
    return (
        <div className='domain'>
            <div className='domain-text'>
                Domains available in <span className='grad2'>Makerspace</span>
            </div>
            <div className='domain_list'>
                <div className='domain_item'>Robotics</div>
                <div className='domain_item'>Robotics</div>
                <div className='domain_item'>Robotics</div>
                <div className='domain_item'>Robotics</div>
                <div className='domain_item'>Robotics</div>
                <div className='domain_item'>Robotics</div>
            </div>
            <div className='domain_desc'>
                Creating cool stuffs, with amazing team{' '}
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/idea.png'} />
                </div>
            </div>
        </div>
    );
};

export default Domain;
