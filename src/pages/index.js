import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Pratyush Portfolio'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Wow! A whole page just about me
              <br /><br />
              Me talking about myself.
            </h2>
          </header>
          <p>
            Recent computer science graduate from New Delhi seeking to use my development knowledge and experience in a big tech giant where i could enhance my skills
            and that would be a great platform to give a great start of my career. Apart from development i also have deep knowledge of
            data science where analytics and machine learning plays a major role. Also i love photography in my spare time.
          </p>
          
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <div className="row">
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  325, Sector 12A
                  <br />
                  Agra, UP
                  <br />
                  India
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +919719026760
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">pratyush.g469@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
