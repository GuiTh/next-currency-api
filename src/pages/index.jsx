import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Api from "../hooks/Api";


export default function Home() {
  return (

     

      <div className="bg-gradient-to-r from-roxo-100 to-rosa-100 h-screen">
        <h1 className="pt-2 text-slate-50 text-5xl font-normal ">Cotação das moedas do Mundo</h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 ">
            <Api moeda="USD-BRL" titulo='Dolar:' />
            <Api moeda="EUR-BRL" titulo='Euro:'/>
            <Api moeda="BTC-BRL" titulo='Bitcoin:' />
            <Api moeda="GBP-BRL" titulo='Libra:'/>
            <Api moeda="ARS-BRL" titulo='Peso:'/>
            <Api moeda="ETH-BRL" titulo='Ethereum:'  />
         </div>
      </div>
      </div>
  );
}
