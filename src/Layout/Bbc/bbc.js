import {useState, useEffect} from 'react';
import { NEWS_API_BBC } from '../../credentials.js';

const Bbc=()=>{

    const [data, setData] = useState([]);

        useEffect(() => {
             fetch(NEWS_API_BBC)
              .then((response) => response.json())
              .then((res) => {
                console.log(res);
          
            //треба вибрати з обєкта масив із 40-ма обєктами,що входить в основний обєкт
                const res1 = [...new Set(res.results.map((item) => item))];
                setData(res1);
                console.log(res1);
          
              })
              .catch(error => {
                console.error("Error fetching data:", error);
              });
          }, []);
          
          const news = data.filter(e=>e.language !=='arabic')
          .filter(el => el.language !== 'hindi') //клас!!!
          .filter(el=>el.language !=='persian')
          .map((item) => (
            <div key={item.id}>
              <div>
              <a target="_blank" rel="noreferrer" className="nav-link p-2" href={item.link}>{item.title}</a>
              </div>
            </div>
          ));
          
const newsHolovn = data.filter(e => e.category[0] ==='top' || e.category[0] === 'health' || e.category[0] === 'other' || e.category[0] === 'technology' || e.category[0] === 'politics' || e.category[0]==='world')
.filter(el => el.language !== 'hindi') //клас!!!
.filter(el=>el.language !== 'persian')
.map(elem=>(
  <div key={elem.id}>
  <div className='d-block'>
     <img src={elem.image_url} alt="" width='100%' height='300px' className='rounded'/> 
    <a target="_blank" rel="noreferrer" className="nav-link p-2 bottom-0 end-0 text-dark fs-4 fw-bold" href={elem.link}>{elem.title}</a>
    <div className='d-flex'>
    <p className='text-dark'>Сьогодні {elem.pubDate.replace(/(\d+)-(\d+)-(\d+)/, " ").split(":", 1) + ":00"} </p><div className="text-light">o</div>
    <p> Ресурс: <span className="badge bg-danger">{elem.source_id}</span></p>
  </div>
  </div>
</div>
));

          const newsSport = data.filter(e => e.category[0] ==='sports')
          .filter(el => el.language !== 'hindi') //клас!!!
          .filter(el=>el.language !== 'persian')
          .map(elem=>(
          <div key={elem.id}>
          <div className='d-block'>
             <img src={elem.image_url} alt="" width='100%' height='300px' className='rounded'/> 
            <a target="_blank" rel="noreferrer" className="nav-link p-2 bottom-0 end-0 text-dark fs-4 fw-bold" href={elem.link}>{elem.title}</a>
            <div className="d-flex">
            <p className=''>Сьогодні {elem.pubDate.replace(/(\d+)-(\d+)-(\d+)/, " ").split(":", 1) + ":00"}</p><div className="text-light">0</div>
            <p> Ресурс: <span className="badge bg-danger">{elem.source_id}</span></p>
          </div>
          </div>
          </div>
          ));
          
          return (
            <>
            <div className='d-flex'>
            <div className='row'>
              <aside className='p-2 col-lg-3 col-md-6 col-sm-12 col-xs-12'><h4 className='text-danger p-2'>ALL NEWS</h4>{news}</aside>
            <main className='col-lg-9 col-md-6 col-sm-12 col-xs-12'>
            <div className='row'>
    <div className='col-12'>
      <p className='p-2 text-danger'>TOP NEWS</p>
      <article className='p-2 article'>{newsHolovn}</article>
    </div>
  </div>

            
              <div className='col-12'>
                <p className='p-2 text-danger'>SPORTS</p>
                <article className='p-2 article'>{newsSport}</article>
              </div>
            
            </main>
            </div>
            </div>
            </>
          );
          }
          
export default Bbc