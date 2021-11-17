import { i18n } from '../documentTranslation'

export default {
  title: 'Site Heading',
  name: 'siteHeading',
  type: 'document',
  // The next property enables full-document translation for this document
  // via the sanity-intl plugin. You can of course modify this object should you
  // need to on a document-to-document bassis.
  i18n,
  fields: [
    {
      title: 'About',
      name: 'about',
      type: 'string'
    },
    {
      title: 'Services',
      name: 'services',
      type: 'string'
    },
    {
      title: 'Contact',
      name: 'contact',
      type: 'string'
    },
    {
      title: 'Products',
      name: 'products',
      type: 'string'
    },
    {
      title: 'Featured Product',
      name: 'featured_product',
      type: 'string'
    },
    {
      title: 'News',
      name: 'news',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      readOnly: true,
      initialValue: 'site-headings'
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     media: 'image'
  //   }
  // }
}
