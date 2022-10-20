import axios from "axios";
import { useEffect, useState } from "react";

export default function Api(props) {
  function ChamaApi(){
  const url ="https://economia.awesomeapi.com.br/" + props.moeda + "/1?format=json";
  axios.get(url).then((resp) => {

    let bid = (resp.data[0].bid*1).toFixed(2);
    setBid(bid);
    let date = resp.data[0].create_date;
    setDate(date);
    let low = (resp.data[0].low*1).toFixed(2);
    setLow(low);
    let high = (resp.data[0].high*1).toFixed(2);
    setHigh(high);
  });
}
function ApareceCotacao(){
  ChamaApi()
}

useEffect(() => {
  ApareceCotacao()
  setInterval(() =>{
    ApareceCotacao()
  }, 1500)
})

  const [date, setDate] = useState([]);
  const [bid, setBid] = useState([]);
  const [high, setHigh] = useState([]);
  const [low, setLow] = useState([]);
  return (
    <div className={`p-5 ${props.className}`} >
        <div className={`bg-slate-200 shadow-lg shadow-black  rounded-tl-2xl 
                        rounded-br-2xl rela ${props.className}`}>
            <div className="flex place-content-between ">      
                <span className="font-semibold text-2xl text-rosa-100 block pt-28 px-2">{props.titulo}</span>
               <p className="px-3"><span className="text-rosa-100 text-right block relative top-7">Atual:</span><br /> <span className="text-8xl font-bold text-rosa-100"><span className="text-sm relative bottom-14 right-1">R$:</span>{bid}</span></p>
            </div>
            <hr className="h-1 border-none bg-gradient-to-r from-rosa-100 to-slate-200 w-full" />
            <div className="flex place-content-between">
                <p className="font-semibold text-rosa-100 pb-8 px-2 text-2xl">Real <br />Brasileiro:</p>
                <p className="text-right"><span className="text-rosa-100 pb-8">Alto: </span><br /> <span className="font-bold text-rosa-100 pb-8 text-3xl"> <span className="text-sm relative bottom-3 right-1">R$:</span>{high}</span></p>
                <p className="text-right px-3"><span className="text-rosa-100 pb-8">Baixo:</span> <br /> <span className="font-bold text-rosa-100 pb-8 text-3xl"><span className="text-sm relative bottom-3 right-1">R$:</span>{low}</span></p>
            </div>
            <div className="px-2">
                <p className="text-rosa-100">{date}</p>
            </div>
        </div>
    </div>
  );
}
