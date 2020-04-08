import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
// import inspiration2 from "../images/leap.jpg";
// import inspiration2 from "../images/beauty.jpg";
// import inspiration2 from "../../images/utah.jpg";
// import jesus from "../../images/jesus-christ.jpeg"
// import inspiration2 from "../images/sunrise.jpg";
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 40% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #eeeeeeee 2rem, #ddbbff00);
  ${"" /* background-image: linear-gradient(to top, #eeeeeeee .1, #ddbbff00); */}
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2);
  width: 100%;
  margin-top: 0;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "jesus-christ.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            src
            srcSet
          }
        }
      }
    }
  `)
  console.log("image", image)
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        {/* <h1>Gospel Inspriation Blog</h1> */}
        {/* <p>
          Hello Utah <Link to="/about">Learn about me &rarr;</Link>
        </p> */}
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
