import axios from "axios";
import { useEffect, useState } from "react";

export default function Api(props) {
  const url =
    "https://economia.awesomeapi.com.br/" + props.moeda + "/1?format=json";
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
  const [name, setName] = useState([]);
  const [date, setDate] = useState([]);
  const [bid, setBid] = useState([]);
  const [high, setHigh] = useState([]);
  const [low, setLow] = useState([]);
  return (
    <div className="p-5 opacity-90 ">
        <div className="bg-slate-200 rounded-tl-2xl
                        rounded-br-2xl  ">
            <div className="flex place-content-between ">      
                <span className="font-semibold text-2xl text-rose-600 block pt-24 px-2">{props.titulo}</span>
               <p className="px-3"><span className="text-rose-600 text-right block ">Atual:</span><br /> <span className="text-8xl font-bold text-rose-600"> {bid}</span></p>
            </div>
            <hr className="h-1 border-none bg-gradient-to-r from-rose-500 to-slate-200 w-full" />
            <div className="flex place-content-between">
                <p className="font-semibold text-rose-600 pb-8 px-2">{props.subtitulo}</p>
                <p className="text-right"><span className="text-rose-600 pb-8">Alto: </span><br /> <span className="font-bold text-rose-600 pb-8 text-3xl">{high}</span></p>
                <p className="text-right px-3"><span className="text-rose-600 pb-8">Baixo:</span> <br /> <span className="font-bold text-rose-600 pb-8 text-3xl">{low}</span></p>
            </div>
            <div className="px-2">
                <p>{date}</p>
            </div>
        </div>
    </div>
  );
}
