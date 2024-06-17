import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function ImageDiv({ name, source }) {
    return (
        <div className="lg:w-2/5  animate-slideIn flex flex-col bg-pink-300 p-5 rounded-xl">
            <div className="w-full flex justify-between items-center">
                <FontAwesomeIcon icon={faHeart} size="2x" color="pink" />
                <FontAwesomeIcon icon={faHeart} size="2x" color="pink" />
                <FontAwesomeIcon icon={faHeart} size="2x" color="pink" />
                <FontAwesomeIcon icon={faHeart} size="2x" color="pink" />
                <h1 className="text-2xl font-bold">{name}</h1>
                <FontAwesomeIcon icon={faHeart} size="2x" color="pink" />
                <FontAwesomeIcon icon={faHeart} size="2x" color="pink" />
                <FontAwesomeIcon icon={faHeart} size="2x" color="pink" />
                <FontAwesomeIcon icon={faHeart} size="2x" color="pink" />
            </div>
            <img
                src={source}
                alt={name}
                className="w-full h-full object-contain rounded-lg  border-solid border-white border-8"
            ></img>
        </div>
    );
}
