import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import Config from '../../../gatsby-config'
import './styles.css'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <title>{Config.siteMetadata.title}</title>
    </Helmet>
    <div className="flex flex-1 flex-col w-full h-screen">
      <header className="mx-auto container px-4 py-6">
        <div className="flex w-full justify-between items-center">
          <Link to="/" className="font-bold text-3x1">
            Vinícius Silva
          </Link>
          <nav className="flex items-center">
            {/* <Link to="/blog" className="p-2 mr-8">
              Blog
            </Link> */}
            <a
              href="https://linkedin.com/in/viniciusps"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 mr-8"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/viniciuspsw"
              rel="noopener noreferrer"
              target="_blank"
              className="p-2"
            >
              <FiGithub />
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border border-gray-400">
        <div className="container mx-auto px-4 py-6 text-gray-700 text-sm">
          2020 &copy;{' '}
          <a href="mailto:viniciuspsw@gmail.com" className="underline">
            E-mail me
          </a>
        </div>
      </footer>
    </div>
  </>
)

export default Layout
