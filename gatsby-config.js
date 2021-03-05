const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.landing.trckrapp.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env

const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    siteUrl,
    title: `TRCKR App`,
    titleTemplate: `TRCKR App`,
    description: `Organization made easy. The ultimate tracking/productivity tool for your life.`,
    image:
      'https://res.cloudinary.com/trckr/image/upload/q_auto/f_auto/w_1000/v1614937030/Landing/logo512_dewili.png',
    defaultImage:
      'https://res.cloudinary.com/trckr/image/upload/q_auto/f_auto/w_1000/v1614937030/Landing/logo512_dewili.png'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:300,400,700,800`],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1F2128`,
        theme_color: `#7D41FF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    }
  ]
}
