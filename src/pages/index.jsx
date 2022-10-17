import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Api from "../hooks/Api";

export default function Home() {
  return (
    <div
      className="
   flex justify-center items-center h-screen bg-gradient-to-tr from-rose-600 to-indigo-600"
    >
      <div className="grid grid-cols-3">
      <Api moeda="BTC-BRL" titulo='bitcoin:' subtitulo='real Brasileiro:' />
      <Api moeda="ETH-BRL" titulo='Ethereum:' subtitulo='real Brasileiro:' />
      <Api moeda="GBP-BRL" titulo='Libra:' subtitulo='real Brasileiro:'/>
      <Api moeda="ARS-BRL" titulo='Peso:' subtitulo='real Brasileiro:'/>
      <Api moeda="EUR-BRL" titulo='Euro:' subtitulo='real Brasileiro:'/>
      <Api moeda="USD-BRL" titulo='Dolar:' subtitulo='real Brasileiro:'/>
      </div>
    </div>
  );
}
