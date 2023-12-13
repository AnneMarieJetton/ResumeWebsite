import React, { useEffect, useState } from 'react';
import Header from './Header';
import "../css-files/Home.css";
import PreLoader from './PreLoader';

function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 7000)
    }, [])

    return (
        <div className="home">
            {loading 
            
            ? 
            
            <PreLoader />
            
            :

            <div>
              <Header />
              <div className='main__right'>
                uhhh....
              </div>
            </div>

            }
        </div>
    )        
}

export default Home