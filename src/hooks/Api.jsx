import axios from "axios";
import { useEffect, useState } from "react";

export default function Api(props) {
  const url =
    "https://economia.awesomeapi.com.br/" + props.moeda + "/1?format=json";
  axios.get(url).then((resp) => {

    let bid = resp.data[0].bid;
    setBid(bid);
    let date = resp.data[0].create_date;
    setDate(date);
    let low = resp.data[0].low;
    setLow(low);
    let high = resp.data[0].high;
    setHigh(high);
  });
  const [name, setName] = useState([]);
  const [date, setDate] = useState([]);
  const [bid, setBid] = useState([]);
  const [high, setHigh] = useState([]);
  const [low, setLow] = useState([]);
  return (
    <div className="p-10">
        <div className="bg-slate-200 rounded-tl-lg
                        rounded-br-lg ">
            <div className="flex place-content-between p-2">      
                <h1 className="font-semibold text-2xl text-rose-600">{props.titulo}</h1>
                <p><span className="text-rose-600">Atual:</span><br /> <span className="text-8xl font-bold font-mon"> {bid}</span></p>
            </div>
            <hr className="h-1 border-none bg-gradient-to-r from-rose-500 to-slate-200 w-full" />
            <div className="flex place-content-between p-2">
                <p >{props.subtitulo}</p>
                <p>{high}</p>
                <p>{low}</p>
            </div>
            <div className="px-2">
                <p>{date}</p>
            </div>
        </div>
    </div>
  );
}
