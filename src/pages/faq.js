import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import FAQ from "../components/icons/BoatIcon"
import FAQBlock from "../components/FAQBlock"
import Faq from "react-faq-component"

const faq = ({ data }) => {
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
        content:
          "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ",
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
        content:
          "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur ",
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
        content:
          "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur ",
      },
    ],
  }

  return (
    <Layout pageTitle="FAQ">
      <Page>
        <ContentContainer className="container">
          <Faq data={faqData} />
        </ContentContainer>
      </Page>
    </Layout>
  )
}

export default faq

const Page = styled.section`
  padding: 3rem 1.5rem;
  background: #eee;
`

// the faq library doesn't play well with styled components. added css to container
const ContentContainer = styled.div`
  max-width: 800px;

  .styles_faq-row-wrapper__3Hsch {
    padding: 1rem;
  }

  .section__faq {
    background: #eee;
  }

  .styles_faq-row-wrapper__3Hsch h2 {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
  }

  #gatsby-focus-wrapper
    > main
    > section.section.section__faq
    > div
    > div
    > section.faq-title.styles_faq-row__2Rd2Y {
    justify-content: center;
  }

  .styles_faq-row-wrapper__3Hsch
    .styles_row-body__8wIE9
    .styles_faq-row__2Rd2Y
    .styles_row-title__2yqnt
    > div {
    width: 100%;
  }

  .styles_faq-row-wrapper__3Hsch
    .styles_row-body__8wIE9
    .styles_faq-row__2Rd2Y
    .styles_row-title__2yqnt.styles_expanded__2KFpr
    + .styles_row-content__TVd0Y.styles_animate__3cloa {
    padding-left: 63px;
  }
  .styles_faq-row-wrapper__3Hsch
    .styles_row-body__8wIE9
    .styles_faq-row__2Rd2Y
    .styles_row-title__2yqnt {
    padding-bottom: 0 !important;
  }

  .styles_faq-row-wrapper__3Hsch .styles_faq-row__2Rd2Y {
    padding-bottom: 1rem !important;
  }

  .styles_faq-row-wrapper__3Hsch
    .styles_row-body__8wIE9
    .styles_faq-row__2Rd2Y
    .styles_row-title__2yqnt.styles_expanded__2KFpr
    + .styles_row-content__TVd0Y.styles_animate__3cloa {
    color: $dark;
    font-weight: 400 !important;
    padding-right: 6rem !important;
  }

  .styles_faq-row-wrapper__3Hsch
    .styles_row-body__8wIE9
    .styles_faq-row__2Rd2Y
    .styles_row-title__2yqnt.styles_expanded__2KFpr
    + .styles_row-content__TVd0Y.styles_animate__3cloa {
    margin-top: -12px;
  }
`

export const query = graphql`
  {
    siteMetaData {
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
        youtube
        website
      }
      loc
      slug
      name
      phone
      state
      street
      zip
      bizID
    }
  }
`
