import { defineConfig } from 'tinacms'

export default defineConfig({
  clientId: '3394f7f0-2fca-4154-809d-4706c1d8a222', // Ottieni questo da Tina CMS
  branch: 'master', // Il branch di Git che Tina CMS utilizza
  media: {
    tina: {
      mediaRoot: '/media',  // Percorso di root per i media
      publicFolder: 'public',
    },
  },
})
