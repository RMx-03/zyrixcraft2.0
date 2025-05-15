import Mail from '../assets/mail.png';
import Bg from '../assets/background.png';
import { useNavigate } from "react-router-dom";
function Thanks() {
    const navigate = useNavigate();
    return (
        <div
            className="w-screen h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="flex flex-col items-center text-center space-y-6 bg-[#e1d3d336] bg-opacity-50 p-6  rounded-xl">
                <img src={Mail} alt="mail" className="w-32 h-32 sm:w-40 sm:h-40" />
                <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-black mb-2">Thanks For Submitting!</h3>
                    <p className="text-lg sm:text-xl font-medium text-black">We'll be in your inbox soon :)</p>
                </div>
                <button onClick={() => navigate('/')} className="px-6 cursor-pointer py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-black rounded-xl text-lg font-semibold hover:opacity-90 transition mb-2">
                    Back To Main
                </button>
            </div>
        </div>
    );
}

export default Thanks;
