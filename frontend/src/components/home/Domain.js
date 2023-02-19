import '../../styles/desktop/home/Domain.css';

const Domain = () => {
    return (
        <div className='domain'>
            <div className='domain-text'>
                Domains available in <span className='grad2'>Makerspace</span>
            </div>
            <div className='domain_list'>
                <div className='domain_item'>IoT</div>
                <div className='domain_item'>Electronics</div>
                <div className='domain_item'>AI/ML</div>
                <div className='domain_item'>Robotics</div>
                <div className='domain_item'>S/W-Dev</div>
                <div className='domain_item'>Graphics</div>
            </div>
            <div className='domain_desc'>
                Creating cool stuffs, with amazing team{' '}
                <div>
                    <img
                        alt='idea'
                        src={process.env.PUBLIC_URL + '/images/idea.png'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Domain;
