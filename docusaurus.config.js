// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'E3  Lineamientos',
  tagline: 'Lineamientos de las diferentes áreas',
  favicon: 'img/favicon.ico',
  
  // URL de tu sitio y baseUrl
  url: 'https://cluna2024.github.io',
  baseUrl: '/E3Lineamientos/',

  organizationName: 'cluna2024',
  projectName: 'E3Lineamientos',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false, // Puedes ajustar esto a 'true' si prefieres URLs con barra inclinada al final.

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cluna2024/E3Lineamientos/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/cluna2024/E3Lineamientos/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'E3  Lineamientos',
      logo: {
        alt: 'E3  Lineamientos Logo',
        src: 'img/logo.png', // Reemplaza con la imagen que subiste
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentación',
        },
      //  { to: '/blog', label: 'Novedades', position: 'left' },
        {
          href: 'https://github.com/cluna2024/E3Lineamientos',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            { label: 'Inicio', to: '/docs/intro' },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
          ],
        },
        {
          title: 'Más',
          items: [
            { label: 'GitHub', href: 'https://github.com/cluna2024/E3Lineamientos' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} E3  Lineamientos, Inc.`,
    },
  },
};

module.exports = config;
