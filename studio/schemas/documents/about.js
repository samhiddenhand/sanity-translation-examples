import { i18n } from '../documentTranslation'

export default {
  title: 'About',
  name: 'about',
  type: 'document',
  // The next property enables full-document translation for this document
  // via the sanity-intl plugin. You can of course modify this object should you
  // need to on a document-to-document bassis.
  i18n,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'captionImage'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'richText'
    }
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     media: 'image'
  //   }
  // }
}
