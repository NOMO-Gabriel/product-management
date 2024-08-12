import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MyNav() {
    return (
        <nav className=" h-14 w-full flex justify-between items-center p-6 border-b border-gray-200">
            <div className="flex space-x-4">
                <div className="border border-gray-200 p-4 flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-blue-500" />
                    <div>(+237) 620864761</div>
                </div>

                <Link href="mailto:mymail@example.com" className="border border-gray-200 p-4 flex items-center space-x-4">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-blue-500" />
                    <div>mymail@example.com</div>
                </Link>

                <div className="border border-gray-200 p-4 flex items-center space-x-2">
                    <FontAwesomeIcon icon={faMapPin} className="h-5 w-5 text-blue-500" />
                    <div>yde cameroon</div>
                </div>
            </div>
            <div className="flex space-x-4">
                <Link href="#" className="border border-gray-200 p-4 flex items-center space-x-2">
                    <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 text-blue-500" />
                    <div>Facebook</div>
                </Link>
                <Link href="#" className="border border-gray-200 p-4 flex items-center space-x-2">
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5 text-blue-500" />
                    <div>LinkedIn</div>
                </Link>
                <Link href="#" className="border border-gray-200 p-4 flex items-center space-x-2">
                    <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-blue-500" />
                    <div>Github</div>
                </Link>
            </div>
        </nav>
    );
}
