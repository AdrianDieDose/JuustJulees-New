const configuration = {
  site: {
    name: 'JuustJulees Portfolio',
    description:
      'This is a portfolio site for JuustJulees' +
      'made with love from @diedose.',
    themeColor: '#efee00',
    siteUrl: 'https://juust-julees.netlify.app',
    siteName: 'JuustJulees Portfolio',
    twitterHandle: 'juustjules',
    githubHandle: 'diedose',
    language: 'de',
  },
  blog: {
    maxReadMorePosts: 6,
  },
  production: process.env.NODE_ENV === 'production',
};

export default configuration;
