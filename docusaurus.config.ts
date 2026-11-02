import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '@ltmleo',
  tagline: 'Algumas coisas legais que gostaria de compartilhar',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ltmleo.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ltmleo', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  clientModules: ['./src/clientModules/reveal.ts'],
  headTags: [
    // Enables scroll-reveal hiding only when JS runs (no-JS keeps content visible).
    {tagName: 'script', attributes: {}, innerHTML: "document.documentElement.setAttribute('data-reveal-ready','')"},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
  ],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        routeBasePath: 'projects',
        path: './projects',
        sidebarPath: require.resolve('./sidebars.ts'),
        editUrl: 'https://github.com/ltmleo/blog/edit/main/',
        exclude: ['**/_archive/**', '**/_drafts/**', 'data-science/mba-dsa-aulas/**'], 
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-714QFE3V9G',
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        docs: {
          sidebarPath: './sidebars.ts',
          path: './learning',
          exclude: ['**/_archive/**', '**/_drafts/**', 'data-science/mba-dsa-aulas/**', 'golang/full-cycle-tech-week/code'], 
          routeBasePath: 'learning',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/ltmleo/blog/edit/main/',
        },
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ltmleo/blog/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/preview.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'ltmleo',
      hideOnScroll: false,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/blog/projects', 
          label: 'Projects', 
          position: 'left',
          sidebarId: 'projectsSidebar',
        },
        {
          type: 'docSidebar',
          sidebarId: 'learningSidebar',
          position: 'left',
          label: 'Learning',
        },
        {to: '/blog/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://ltmleo.github.io/omeletteaufromage/',
          label: 'Omelette Au Fromage',
          position: 'right',
        },
        {
          href: 'https://ltmleo.github.io/receitas/',
          label: 'Receitas',
          position: 'right',
        },
        {
          href: 'https://github.com/ltmleo/blog',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Coisas que estou aprendendo',
              to: 'learning/',
            },
            {
              label: 'Projetos que estou desenvolvendo',
              to: 'projects/',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ltmleo/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/ltmleo/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ltmleo',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Search',
              to: '/search',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ltmleo/blog',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Leonardo Montero · ltmleo`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'PXW2V2BV3M',

      // Public API key: it is safe to commit it
      apiKey: 'db2a10bceffa9302d6d02a9f18519c06',

      indexName: 'ltmleoio',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
