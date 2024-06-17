import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageDiv from "./components/ImageDiv";
import Slide from "./components/Slide";

function App() {
    const [first, setFirst] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [currImage, setCurrImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (first === false) {
                setCurrImage((currImage) =>
                    currImage === 15 ? 0 : currImage + 1
                );
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [first]);
    let descriptions = [
        "Patrz to my nad strzeszynkiem",
        "O tu na Helu",
        "MMM ale dobre darmowe piwo",
        "Niezły bucket",
        "Bardzo pasuje mój strój do twojego piękna",
        "Ale kowboje",
        "O, patrz, pół roku",
        "O, jak romantycznie w walentynki",
        "Bardzo fajny ogród botaniczny",
        "Patrz tutaj nad morze",
        "O, tutaj przed wyprawą 12 km...",
        "Bardzo fajne lustro",
        "A tutaj jacy szczęśliwi ze skałami",
        "Bardzo poważne miny...",
        "A tutaj na najlepszym filmie",
        "Dziękuje",
    ];
    return (
        <div>
            {first ? (
                <div>
                    {!clicked ? (
                        <div
                            onClick={() => setClicked(true)}
                            className="w-screen h-screen bg-red-50 flex justify-center p-8 items-center"
                        >
                            <h1 className=" text-2xl lg:text-7xl font-bold transition duration-3000 ease-in bg-gradient-to-r from-indigo-300 to-fuchsia-600 bg-clip-text text-transparent text-center">
                                {" "}
                                Tak, znowu nie popisałem się umiejętnościami
                                manualnymi...
                            </h1>
                            <div></div>
                        </div>
                    ) : (
                        <div className="w-screen h-screen flex flex-col justify-around items-center bg-purple-200">
                            <div className="flex  flex-col gap-10  animate-slideIn">
                                {" "}
                                <h1 className=" text-5xl  font-bold bg-gradient-to-r from-indigo-300 to-fuchsia-600 bg-clip-text text-transparent text-center">
                                    Ale staram sie nadrabiac
                                </h1>
                                <button
                                    className="bg-gradient-to-r from-indigo-300 to-fuchsia-600 text-2xl border-2 border-solid border-white rounded-lg text-white font-bold p-2"
                                    onClick={() => setFirst(false)}
                                >
                                    Kliknij po niespodzianke
                                </button>
                            </div>

                            <div className="w-full flex flex-col lg:flex-row justify-center gap-20">
                                {" "}
                                <ImageDiv
                                    source="Hot.jpg"
                                    name="To my dzisiaj"
                                ></ImageDiv>
                                <ImageDiv
                                    name="To my kiedyś"
                                    source="/Park.jpg"
                                ></ImageDiv>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-screen h-screen flex flex-col justify-around items-center bg-purple-200">
                    <Slide
                        key={currImage}
                        image={currImage}
                        description={descriptions[currImage]}
                    ></Slide>
                </div>
            )}
        </div>
    );
}

export default App;
