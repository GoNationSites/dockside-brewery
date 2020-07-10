import React from 'react';
import Layout from '../components/Layout'
import FAQ from '../components/icons/BoatIcon'
import FAQBlock from '../components/FAQBlock'
import Faq from 'react-faq-component';

const faq = ({data}) => {
    const siteData = data.siteMetaData.data
    const bizID = data.siteMetaData.bizID

    const faqData = {
      title: "Our frequently asked questions",
      rows: [
        {
          title: (
            <div class="columns is-mobile columns__faq is-vcentered">
              <div className="column is-1">
                <FAQ width="50px" />
              </div>
              <div className="column column__question">
                <p>Question Here</p>
              </div>
            </div>
          ),
          content: "Lorem ipsum dolor sit amet, consectetur ",
        },
        {
          title: (
            <div class="columns is-mobile columns__faq is-vcentered">
              <div className="column is-1">
                <FAQ width="50px" />
              </div>
              <div className="column column__question">
                <p>Question Here</p>
              </div>
            </div>
          ),
          content: "Lorem ipsum dolor sit amet, consectetur ",
        },
        {
          title: (
            <div class="columns is-mobile columns__faq is-vcentered">
              <div className="column is-1">
                <FAQ width="50px" />
              </div>
              <div className="column column__question">
                <p>Question Here</p>
              </div>
            </div>
          ),
          content: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ",
        },
        {
          title: (
            <div class="columns is-mobile columns__faq is-vcentered">
              <div className="column is-1">
                <FAQ width="50px" />
              </div>
              <div className="column column__question">
                <p>Question Here</p>
              </div>
            </div>
          ),
          content: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur ",
        },
        {
          title: (
            <div class="columns is-mobile columns__faq is-vcentered">
              <div className="column is-1">
                <FAQ width="50px" />
              </div>
              <div className="column column__question">
                <p>Question Here</p>
              </div>
            </div>
          ),
          content: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur ",
        },
      ],
    }


    return (
        <Layout pageTitle="FAQ" data={siteData}>
          <section className="section section__faq">
              <div className="container container__faq">
                  <Faq data={faqData} />
              </div>
          </section>
        </Layout>
    );
}

export default faq;



export const query = graphql`
  {
    siteMetaData {
      data {
        avatar {
          imageBaseUrl
        }
        city
        desc
        cover {
          imageBaseUrl
        }
        hours {
          fri {
            close
            open
          }
          mon {
            close
            open
          }
          sat {
            close
            open
          }
          sun {
            close
            open
          }
          thu {
            close
            open
          }
          tue {
            close
            open
          }
          wed {
            close
            open
          }
        }
        lastPricelistUpdate {
          sec
          usec
        }
        links {
          facebook
          instagram
          twitter
          website
          youtube
        }
        loc
        slug
        name
        phone
        state
        street
        zip
      }
      bizID
    }
  }
`
