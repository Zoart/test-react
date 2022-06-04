import react_logo from './images/react-logo.png'

export default function Header() 
{
  return (
    <header className="header">
      <img src={react_logo} width='40px' 
      alt='React logo'></img>
      <h1 className="header__title">Facts about react</h1>
    </header>
  )
}