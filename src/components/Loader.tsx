import Logo from '../assets/ZyrixcraftLogo.webp'
import '../style/Loader.css'
function Loader() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black relative'>
        <img src={Logo} alt="Logo"  />
        <h1 className='loader absolute top-20  -left-18 '>Loading</h1>
    </div>
  )
}

export default Loader