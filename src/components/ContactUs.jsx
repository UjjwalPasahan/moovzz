import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center">
        <div className="max-w-3xl p-8 text-white rounded-lg  shadow-[#8B78E6] drop-shadow-md border-[0.5px] border-zinc-600 shadow-2xl">
            <h1 className="text-4xl font-bold mb-6"><i className="hover:text-[#8B78E6] ri-arrow-left-circle-line mr-3" onClick={() => navigate(-1)}></i>
        Contact Us</h1>
            <p className="text-lg mb-4">
                We value your feedback and are here to assist you with any questions or concerns you may have. Please do not hesitate to reach out to us through any of the following methods:
            </p>
            <p className="text-lg mb-4">
                <strong>Email:</strong> support@ourstreamingservice.com
            </p>
            <p className="text-lg mb-4">
                <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-lg mb-4">
                <strong>Address:</strong> 123 Streaming Service Lane, Movie Town, CA 12345
            </p>
            <p className="text-lg mb-4">
                For any technical issues, account inquiries, or content suggestions, feel free to drop us an email or give us a call. Our support team is available 24/7 to ensure you have the best experience possible.
            </p>
            <p className="text-lg mb-4">
                You can also follow us on our social media channels to stay updated with the latest news, releases, and promotions:
            </p>
            <ul className="text-lg mb-4 list-disc list-inside">
                <li><strong>Facebook:</strong> facebook.com/ourstreamingservice</li>
                <li><strong>Twitter:</strong> twitter.com/ourstreamingservice</li>
                <li><strong>Instagram:</strong> instagram.com/ourstreamingservice</li>
            </ul>
            <p className="text-lg">
                Thank you for choosing our streaming service. We look forward to hearing from you!
            </p>
        </div>
    </div>
);
};

export default ContactUs;
