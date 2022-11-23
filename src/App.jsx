import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [news, setNews] = useState()
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    await fetch('http://localhost:4000/news')
      .then(res => res.json())
      .then(res => {
        setNews(res.data)
        setLoading(false)
        console.log(res.data)
      })
  }

  useEffect(() => {
    loadNews();
  }, [])

  const renderNews = (array) => {
    return array.map((el, i) => {
      return (
        <div className='news-card' key={i}>
          <div className='img-container'>
            <img src={el?.img} />
          </div>
          <div className='news-title'>
            <span>{el?.title}</span>
          </div>
          <a href={el?.href} target='_blank'>Ver Noticia</a>
        </div>
      );
    })
  }

  return (
    <div className="App">
      <div>
        <h1>Noticias</h1>
      </div>
      <div className='infobae'>
        <h2>Infobae</h2>
      </div>
      <div className='news-layout'>
        {
          (!loading)
            ? renderNews(news)
            : <></>
        }
      </div>
    </div>
  )
}

export default App
