import { useState, useEffect } from "react";
import {NEWS_API_KEY} from "../../credentials.js";

const Main=()=>{
   
const [data, setData] = useState([]);
const [date, setDate] = useState(new Date().toLocaleDateString());

useEffect(() => {
  fetch(NEWS_API_KEY)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);

  //треба вибрати з обєкта масив із 40-ма обєктами,що входить в основний обєкт
      const res1 = [...new Set(res.results.map((item) => item))];
      setData(res1);
      console.log(res1);
      setDate(new Date().toLocaleDateString());
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}, []);


const news = data.filter(item=>item.language !=='russian')
.map((item) => (
  <div key={item.id}>
    <div>
    <a target="_blank" className="nav-link p-2" href={item.link}>{item.title}</a>
    </div>
  </div>
));

const newsHolovn = data.filter(e => e.category[0] ==='top')
.filter(el=>el.language !=='russian')
.map(elem=>(
  <div key={elem.id}>
  <div className='d-block'>
     <img src={elem.image_url} alt="" width='100%' height='300px' className='rounded'/> 
    <a target="_blank" className="nav-link p-2 bottom-0 end-0 text-dark fs-4 fw-bold" href={elem.link}>{elem.title}</a>
    <div className='d-flex'>
    <p className='p-2 text-dark'>Сьогодні {elem.pubDate.replace(/(\d+)-(\d+)-(\d+)/, " ").split(":", 1) + ":00"} </p><div className="text-light">o</div>
    <p className='p-2'> Ресурс: <span class="badge bg-danger">{elem.source_id}</span></p>
  </div>
  </div>
</div>
));

const newsSport = data.filter(e => e.category[0] ==='sports')
.map(elem=>(
<div key={elem.id}>
<div className='d-block'>
   <img src={elem.image_url} alt="" width='100%' height='300px' className='rounded' target="_blank"/> 
  <a target="_blank" className="nav-link p-2 bottom-0 end-0 text-dark fs-4 fw-bold" href={elem.link}>{elem.title}</a>
  <div className="d-flex">
  <p className='p-2'>Сьогодні {elem.pubDate.replace(/(\d+)-(\d+)-(\d+)/, " ").split(":", 1) + ":00"}</p><div className="text-light">0</div>
  <p className='p-2'> Ресурс: <span class="badge bg-danger">{elem.source_id}</span></p>
</div>
</div>
</div>
));

return (
  <>
  <div className='d-flex'>
  <div className="row">
    <aside className='p-2 col-lg-3 col-md-6 col-sm-12 col-xs-12'><h4 className='text-danger p-2'>ВСІ НОВИНИ</h4>{news}</aside>
  
  <main className='col-lg-9 col-md-6 col-sm-12 col-xs-12'>
  <div className='row'>
    <div className='col-12'>
      <p className='p-2 text-danger'>ГОЛОВНІ НОВИНИ<span className="costom-text p-2">{date}</span></p>
      <article className='p-2 article'>{newsHolovn}</article>
    </div>
   </div>

    <div className='col-12'>
      <p className='p-2 text-danger'>СПОРТ</p>
      <article className='p-2 article'>{newsSport}</article>
    </div>
  </main>
  </div>
  </div>
  </>
);
}
export default Main