export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61169c1f12136b18ee543996',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pga32w7j',
                  apiId: '176ee912-7b62-4982-8a6d-ca9b305fa90f'
                },
                {
                  buildHookId: '61169c1f12136b18755439e9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cmzej8bw',
                  apiId: 'b769b2d0-5bdf-4b6b-9996-382e4066f43b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vzkiss/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cmzej8bw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
