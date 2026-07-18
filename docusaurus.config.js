// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Project Dashboard AI',

  tagline: 'Documentation for Project Dashboard AI JetBrains Plugin',

  favicon: 'img/favicon.ico',


  future: {
    v4: true,
  },


  // Custom domain (Cloudflare-registered)
  url: 'https://project-dashboard-ai.com',

  // Site now lives at domain root, not a repo subpath
  baseUrl: '/',


  // GitHub repository
  organizationName: 'projectdashboard-2025',

  projectName: 'project-dashboard-ai-plugin-jetbrains',


  onBrokenLinks: 'warn',


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-8KRZKBMHDK',
        anonymizeIP: true,
      },
    ],
  ],

  presets: [

    [
      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */

      ({

        docs: {

          sidebarPath: './sidebars.js',

        },

        // No blog on this site — without this, Docusaurus enables the blog plugin
        // by default and generates an empty /blog route (and lists it in sitemap.xml)
        // even with zero posts.
        blog: false,

        theme: {

          customCss: './src/css/custom.css',

        },

      }),

    ],

  ],



  themeConfig:

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

      ({

        metadata: [
          {
            name: 'google-site-verification',
            content: 'H__XNyxbw57wTp_h2j1gHco9IPMW0r8UC65ptTIrCzM',
          },
        ],

        colorMode: {

          respectPrefersColorScheme: true,

        },


        navbar: {

          title: 'Project Dashboard AI',


          logo: {

            alt: 'Project Dashboard AI Logo',

            src: 'img/logo.svg',

          },


          items: [


            {

              type: 'docSidebar',

              sidebarId: 'tutorialSidebar',

              position: 'left',

              label: 'Docs',

            },


            {

              to: '/privacy',

              label: 'Privacy',

              position: 'left',

            },


            {

              to: '/feedback',

              label: 'Feedback',

              position: 'left',

            },


            {

              href:
                  'https://plugins.jetbrains.com/plugin/27986-project-dashboard-ai',

              label: 'JetBrains Marketplace',

              position: 'right',

            },


          ],

        },



        footer: {

          style: 'dark',

          copyright:
              `${new Date().getFullYear()} Project Dashboard AI.`,

        },



        prism: {

          theme: prismThemes.github,

          darkTheme: prismThemes.dracula,

        },

      }),

};


export default config;