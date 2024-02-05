import Link from "next/link"
import "/components/style.css";
import Image from "next/image";

export default function Footer() {
    return (
        <section className="flex h-[150px] bg-green-400">
            <div className="w-[150px] hover:bg-green-600 rounded-[80px] p-6 transition-all"><img className="logo" src="https://www.cbr.ru/StaticHtml/File/150236/d_ruble.svg" /></div>

            <div className="flex">
                <Link className= "p-4 h-5 bg-green-400 hover:bg-green-600  transition-all text-white opacity-[0.17] rounded-md border-2 border-solid border-black" href ="/Users">Юзерс</Link>
                <Link className=" p-4 h-5 bg-green-400 hover:bg-green-600 transition-all text-white opacity-[0.17] rounded-md border-2 border-solid border-black" href ="/Users/Profile">Профайл</Link>
        </div>
        </section>
    )
}