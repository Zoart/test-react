import react_logo from '../images/react-logo.png'

export default function Header() 
{
  return (
    <header className="header">
      <div className='header__logo'>
          <img className='logo__png' src={react_logo} alt=""></img>
          <h3 className="header__title">ReactFacts</h3>
      </div>
      <p className='header__project-number'>
        Project 1
      </p>
    </header>
  )
}