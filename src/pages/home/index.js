import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/layout'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }

      photo: file(relativePath: { eq: "images/me.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="flex h-full items-center">
        <div className="container mx-auto p-4">
          <div className="mb-6 flex items-center">
            <Image
              fixed={data.photo.childImageSharp.fixed}
              alt="Me!"
              className="shadow-lg rounded-full"
            />
            <div className="ml-6">
              <h1 className="text-2xl sm:text-3xl font-black">Vinícius Silva</h1>
              <h4 className="text-lg sm:text-xl text-gray-800">Software Developer</h4>
            </div>
          </div>
          <p className="text-base sm:text-xl text-gray-800 md:max-w-2xl">
            {data.site.siteMetadata.description}
          </p>
        </div>
      </div>
    </Layout>
  )
}
