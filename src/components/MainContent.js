import content_react_logo from '../images/react-icon-large.png';

export default function MainContent() 
{
  return (
    <section className="content">
      <div>
        <h1 className="content__title">Facts about react</h1>
        <ul className="fact-list">
          <li className="fact-list__item">Was first released in 2013</li>
          <li className="fact-list__item">Was originally created by Jordan Walke</li>
          <li className="fact-list__item">Has well over 100K stars on GitHub</li>
          <li className="fact-list__item">Is maintained by Facebook</li>
          <li className="fact-list__item">Powers thousands of enterprise apps, 
            including mobile apps</li>
        </ul>
      </div>
      <img className='content__image' src={content_react_logo}></img>
      
    </section>
  )
}