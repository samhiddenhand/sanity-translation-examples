import { i18n } from '../documentTranslation'

export default {
  title: 'Site Settings',
  name: 'siteHeading',
  type: 'document',
  // The next property enables full-document translation for this document
  // via the sanity-intl plugin. You can of course modify this object should you
  // need to on a document-to-document bassis.
  i18n,
  initialValue: {
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    products: 'Products',
    featured_product: 'Featured Product',
    news: 'News'
  },
  fields: [
    {
      title: 'About',
      name: 'about',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Services',
      name: 'services',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Contact',
      name: 'contact',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Products',
      name: 'products',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Welcome To LPP',
      name: 'welcome',
      type: 'richText',
      validation: Rule => Rule.required()
    },
    {
      title: '"Featured Product" Title (FR/EN)',
      name: 'featured_product',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Featured Product Information',
      name: 'featured_product_image',
      type: 'captionImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'News',
      name: 'news',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug'
    },
  ],
  preview: {
    select: {
      title: 'Site Settings'
    }
  }
}
