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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        editUrl: 'https://github.com/ltmleo/blog/edit/main/'
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
        docs: {
          sidebarPath: './sidebars.ts',
          path: './learning',
          routeBasePath: 'learning',
          editUrl:
            'https://github.com/ltmleo/blog/edit/main/',
        },
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
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
    image: 'img/preview.jpg',
    navbar: {
      title: 'Home',
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
          href: 'https://github.com/ltmleo/blog',
          label: 'GitHub',
          position: 'right',
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
      copyright: `Copyright © ${new Date().getFullYear()} ltmleo personal blog, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
