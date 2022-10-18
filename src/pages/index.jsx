import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Api from "../hooks/Api";

export default function Home() {
  return (

     

      <div className="bg-gradient-to-tr from-rose-600 to-indigo-600 h-screen">
        <h1 className="pt-2 text-slate-50 text-5xl font-normal pl-12 ">Cotação das moedas do Mundo</h1>
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 ">
          <Api moeda="BTC-BRL" titulo='bitcoin:' subtitulo='real Brasileiro:' />
          <Api moeda="ETH-BRL" titulo='Ethereum:' subtitulo='real Brasileiro:' />
          <Api moeda="GBP-BRL" titulo='Libra:' subtitulo='real Brasileiro:'/>
          <Api moeda="ARS-BRL" titulo='Peso:' subtitulo='real Brasileiro:'/>
          <Api moeda="EUR-BRL" titulo='Euro:' subtitulo='real Brasileiro:'/>
          <Api moeda="USD-BRL" titulo='Dolar:' subtitulo='real Brasileiro:'/>
        </div>
      </div>
      </div>
  );
}
