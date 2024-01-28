import mascout from '../../assets/imgs/mascout.svg';
import logo from '../../assets/imgs/logo.svg';
import { useState } from 'react';
import axios from 'axios';
export default function Footer() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://127.0.0.1:5173", {prompt}).then((res)=>{
            setResponse(res.data);
        }).catch((err)=>{
            console.error(err);
        })
    }

    return(
        <>
            <section className="text-gray-600 overflow-hidden">
                <div>
                    <button onClick={handleSubmit}>send</button>
                    <input type="text" value={prompt} onChange={(e)=>setPrompt(e.target.value)}/>
                    <p>{response}</p>
                </div>
                <div className='mx-auto my-6 flex flex-col gap-3 w-full h-24'>
                    <img className="lg:w-1/2 w-48 h-16 m-auto" src={logo}/> 
                    <h2 className='font-poppins font-bold tracking-wide text-center text-[#323232] text-4xl'>Задай вопрос нашему <span className='text-[#30A879]'>ассистенту!</span></h2>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img className="lg:w-1/2 w-full lg:h-auto " src={mascout}/> 
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}