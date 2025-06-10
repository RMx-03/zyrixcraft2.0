import Mail from '../assets/mail.png';
import { useNavigate } from "react-router-dom";

function Thanks() {
    const navigate = useNavigate();
    return (
        <div
            className="w-screen h-screen flex items-center justify-center px-4 bg-black relative overflow-hidden"
        >
            {/* Subtle pattern using inline style */}
            <div
                className="absolute inset-0 opacity-10 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(135deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                        linear-gradient(225deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                        linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                        linear-gradient(315deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%)`,
                    backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                    backgroundSize: '20px 20px',
                    backgroundRepeat: 'repeat',
                }}
            />

            <div className="z-10 flex flex-col items-center text-center gap-6 backdrop-blur-xl bg-[#0d0d0d]/60 p-10 rounded-3xl border border-[#292929] shadow-[0_4px_30px_rgba(0,0,0,0.3)] max-w-md w-full">
                <img src={Mail} alt="mail" className="w-24 h-24 sm:w-28 sm:h-28 opacity-90" />
                <div>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2 tracking-tight">
                        Thanks For Submitting
                    </h3>
                    <p className="text-base sm:text-lg text-gray-400 font-light">
                        We'll be in your inbox soon.
                    </p>
                </div>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 rounded-full border cursor-pointer border-[#640CF1] text-[#640CF1] hover:bg-[#640CF1]/10 transition-all duration-300 text-sm sm:text-base font-medium"
                >
                    Back To Main
                </button>
            </div>
        </div>
    );
}

export default Thanks;