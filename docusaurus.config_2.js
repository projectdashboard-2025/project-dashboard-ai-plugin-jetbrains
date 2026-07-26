8// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Project Dashboard AI',

  tagline: 'AI-Powered Project Dashboard for JetBrains IDEs',

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
        // TODO: confirm this is the correct, currently-intended GA property —
        // the live site was seen loading G-8SFEQ7EFW7 instead of this ID.
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

        blog: false,

        theme: {

          customCss: './src/css/custom.css',

        },

        // Auto-generates sitemap.xml at build time from `url` above — already
        // active by default via the classic preset, listed explicitly here so
        // the priority/changefreq values are visible and easy to tune later.
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/feedback'],
          filename: 'sitemap.xml',
        },

      }),

    ],

  ],



  themeConfig:

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

      ({

        // Default OG/Twitter card image for every page that doesn't set its
        // own — put a real 1200×630 PNG/JPG at this path in static/.
        image: 'img/social-card.png',

        metadata: [
          {
            // TODO: replace with a NEW token — this one was issued for
            // project-dashboard-ai.is-a.dev, a different Search Console
            // property than project-dashboard-ai.com. Get a fresh one from
            // search.google.com/search-console after adding the new domain.
            name: 'google-site-verification',
            content: 'PASTE_NEW_TOKEN_FOR_.com_DOMAIN_HERE',
          },
          {
            name: 'keywords',
            content:
                'JetBrains plugin, IntelliJ IDEA, AI commit messages, GitHub Issues sync, project dashboard, AI code assistant',
          },
          {
            property: 'og:site_name',
            content: 'Project Dashboard AI',
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
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