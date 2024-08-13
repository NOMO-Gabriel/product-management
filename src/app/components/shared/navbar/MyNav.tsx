import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MyNav() {
    return (
        <nav className="h-14 w-full flex justify-between items-center p-6 border-b border-gray-200">
            <div className="flex space-x-4">
                <div
                    className="border border-gray-200 p-4 flex items-center space-x-2 hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                    onClick={() => copyToClipboard("(+237) 620864761")}
                >
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-blue-500" />
                    <div>(+237) 620864761</div>
                </div>

                <Link href="mailto:mymail@example.com" className="border border-gray-200 p-4 flex items-center space-x-4 hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-blue-500" />
                    <div>mymail@example.com</div>
                </Link>

                <div className="border border-gray-200 p-4 flex items-center space-x-2 hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faMapPin} className="h-5 w-5 text-blue-500" />
                    <div>yde cameroon</div>
                </div>
            </div>
            <div className="flex space-x-4">
                <Link href="#" className="border border-gray-200 p-4 flex items-center  hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 text-blue-500" />
                </Link>
                <Link href="#" className="border border-gray-200 p-4 flex items-center  hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5 text-blue-500" />
                </Link>
                <Link href="#" className="border border-gray-200 p-4 items-center hover:bg-blue-100 hover:text-blue-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-blue-500" />
                </Link>
            </div>
        </nav>
    );
}

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Number copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
