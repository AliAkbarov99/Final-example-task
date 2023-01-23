import React from 'react'
import './Home.scss'
import Card from '../../Components/Card/Card'

const Home = () => {
  return (
    <>
      <div id='intro'>
        <div className='container'>
          <div className='intro__content'>
            <h2>Notary Public &</h2>
            <h3>Legal Solutions</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, consequatur. Labore sed cumque accusamus similique dolores excepturi distinctio amet temporibus.</p>
          </div>
        </div>
      </div>

      <div className='practice'>
        <div className='container areas-container'>
          <div id='areas'>
            <h1>Practice <span>Areas</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <div className='areas__cards'>
              <div className='areas__cards__item'>
                <div className='areas__cards__item__icon'></div>
                <h3>Bankruptey Law</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, itaque.</span>
              </div>
              <div className='areas__cards__item'>
                <div className='areas__cards__item__icon'></div>
                <h3>Business Law</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, itaque.</span>
              </div>
              <div className='areas__cards__item'>
                <div className='areas__cards__item__icon'></div>
                <h3>Civil Rights Law</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, itaque.</span>
              </div>
              <div className='areas__cards__item'>
                <div className='areas__cards__item__icon'></div>
                <h3>Criminal Law</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, itaque.</span>
              </div>
              <div className='areas__cards__item'>
                <div className='areas__cards__item__icon'></div>
                <h3>Immigration Law</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, itaque.</span>
              </div>
              <div className='areas__cards__item'>
                <div className='areas__cards__item__icon'></div>
                <h3>Family Law</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, itaque.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='reliable'>
        <div className="container">
          <div>
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
          </div>
          <div className='reliable__text'>
            <p>We Provide Highly <strong>Reliable</strong></p>
            <p><strong>& Effective</strong> Legal Solutions</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laborum ex dolor minus repudiandae aspernatur, animi error! Illum asperiores voluptas vero aliquid similique nam nihil ducimus eum molestias voluptate saepe, aperiam est eveniet excepturi tenetur. </p>
            <div><button>Book an appointment</button></div>
          </div>
        </div>
      </div>

      <div id='customers'>
      <h1>Happy Customers</h1>

        <div className="container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>


      <div id='legal'>
        <div className="container">
          <div className='legal__img'>
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
          </div>
          <div className='legal__first'>
            <p>
              We Have <strong>Legal</strong>
              <p><strong>Solutions</strong></p>
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa velit quibusdam modi quasi accusantium! Iusto.
                Ipsa velit quibusdam modi quasi accusantium!
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa velit quibusdam modi quasi accusantium! Iusto.
                Ipsa velit quibusdam modi quasi accusantium!
                
              </p>

              <div className='legal__first__list'>✔ Aperiam iste nam molestias</div>
              <div className='legal__first__list'>✔ Lorem ipsum dolor sit.</div>
              <div className='legal__first__list'>✔ Lorem, ipsum dolor.</div>
          </div>
          <div className='legal__second'>
            <p>How to download and register?</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis quis nostrum dolore ad ipsam mollitia aperiam, magni assumenda repudiandae minima sint veniam et sit debitis culpa. Necessitatibus, sapiente nobis.</span>
            <p>How to crate your paypal account?</p>
            <p>How to link your paypal and bank account?</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home