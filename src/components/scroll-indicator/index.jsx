import { useState, useEffect } from 'react';
import './style.css';

export default function index({ url }) {
  const [data, setData] = useState([]);
  const [loaidng, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      let response = await fetch(getUrl);
      let data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  console.log(data, scrollPercentage);

  return (
    <div>
      <div className='top-container'>
        <h1>Custom Scroll Indicator</h1>
        <div className='scroll-progress-tracking-container'>
          <div
            className='current-progress-bar'
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className='data-container'>
        {data && data.length > 0
          ? data.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </div>
  );
}
