import '../../styles/desktop/About.css'

const Event = (props) => {
  return (
    <div className='event-card'>
        <h2 className='event-title'>{props.title}</h2>
        <p className='event-desc'>{props.desc}</p>
        <section className='gallery'>
                <div className='item i-1'></div>
                <div className='item i-2'></div>
                <div className='item i-3'></div>
                <div className='item i-4'></div>
                <div className='item i-5'></div>
                <div className='item i-6'></div>
            </section>
    </div>
  )
}

export default Event