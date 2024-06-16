export default function Slide({ image, description }) {
    return (
        <div className="   flex flex-col bg-pink-300 p-5 rounded-xl text-center gap-2 animate-slide">
            <h1 className="text-white font-bold text-xl">{description}</h1>
            <img
                src={"/Album/" + image + ".jpg"}
                alt={image}
                className=" w-full h-full object-contain rounded-lg  border-solid border-white border-8 max-h-[600px]"
            ></img>
        </div>
    );
}
