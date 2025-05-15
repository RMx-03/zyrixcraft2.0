import Logo from '../assets/ZyrixcraftLogo.webp'
import '../style/Loader.css'
function Loader() {
  return (
    <div className='container'>
        <img src={Logo} alt="Logo" className='logo' />
        <h1 className='loader absolute top-20  -left-18 '>Loading</h1>
    </div>
  )
}

export default Loader