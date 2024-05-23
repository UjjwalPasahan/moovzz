import { useNavigate } from "react-router-dom";

const Abouts = () => {
    
  const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center">
            <div className="max-w-3xl p-8 text-white rounded-lg shadow-[#8B78E6] drop-shadow-md border-[0.5px] border-zinc-600 shadow-2xl">
                <h1 className="text-4xl font-bold mb-6 tracking-tighter"><i className="hover:text-[#8B78E6] ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
        About Us</h1>
                <p className="text-lg mb-4 tracking-tighter">
                    Welcome to our streaming service, your ultimate destination for movies, TV shows, and original content. Our mission is to provide a seamless and enjoyable viewing experience for our users. We are committed to delivering high-quality entertainment, from the latest blockbusters to timeless classics.
                </p>
                <p className="text-lg mb-4 tracking-tighter">
                    Our platform is designed with you in mind. With personalized recommendations, easy navigation, and a vast library of content, we ensure that you always have something great to watch. Whether you are a fan of drama, comedy, action, or documentaries, we have something for everyone.
                </p>
                <p className="text-lg mb-4 tracking-tighter">
                    Our team is passionate about entertainment and technology. We constantly update our library with new releases and exclusive content, so you never run out of options. Our user-friendly interface makes it easy to discover new favorites and enjoy them anytime, anywhere.
                </p>
                <p className="text-lg mb-4">
                    Thank you for choosing our service. We are dedicated to bringing you the best in entertainment and creating a community of viewers who share a love for great content. Enjoy your viewing experience!
                </p>
            </div>
        </div>
    );
};

export default Abouts;
