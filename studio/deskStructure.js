import S from '@sanity/desk-tool/structure-builder'
import * as I18nS from 'sanity-plugin-intl-input/lib/structure';
import { i18n } from './schemas/documentTranslation'

import {
  GrDocumentText as FieldIcon,
  GrMultiple as DocumentIcon,
  GrTextAlignLeft as PostIcon,
  GrUser as AuthorIcon,
  GrArticle as ArticleIcon
} from 'react-icons/gr'

export const getDefaultDocumentNode = (props) => {
  if (props.schemaType === 'product') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  if (props.schemaType === 'productCategory') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  if (props.schemaType === 'equipmentType') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  if (props.schemaType === 'about') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  if (props.schemaType === 'news') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  if (props.schemaType === 'service') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  return S.document();
};

export default () =>
  S.list()
    .title('Content')
    .items([
      // S.listItem()
      //   .title('Field level')
      //   .icon(FieldIcon)
      //   .child(
      //     S.list()
      //       .id('field-level')
      //       .title('Field level translations')
      //       .items(
      //         [
      //           // S.documentTypeListItem('article')
      //           //   .icon(ArticleIcon),
      //           // S.documentTypeListItem('author')
      //           //   .icon(AuthorIcon),
      //         ]
      //       )
      //   ),
      S.listItem()
        .title('Site Documents')
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('doc-level')
            .title('Document level translations')
            .items([
              S.listItem()
                .title('Product Category')
                .id('product-category-docs')
                // .icon(PostIcon)
                .schemaType('productCategory')
                .child(
                  S.documentList()
                    .id('productCategory')
                    .title('Product Category')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "productCategory" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'productCategory'
                    })
                ),

                S.listItem()
                .title('Equipment Type')
                .id('equipment-type-docs')
                // .icon(PostIcon)
                .schemaType('equipmentType')
                .child(
                  S.documentList()
                    .id('equipmentType')
                    .title('Equipment Type')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "equipmentType" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'equipmentType'
                    })
                ),

              S.listItem()
                .title('Product')
                .id('product-docs')
                // .icon(PostIcon)
                .schemaType('product')
                .child(
                  S.documentList()
                    .id('product')
                    .title('Product')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "product" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'product'
                    })
                ),

                S.listItem()
                .title('About')
                .id('about-docs')
                // .icon(PostIcon)
                .schemaType('about')
                .child(
                  S.documentList()
                    .id('about')
                    .title('About')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "about" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'about'
                    })
                ),

                S.listItem()
                .title('News')
                .id('news-docs')
                // .icon(PostIcon)
                .schemaType('news')
                .child(
                  S.documentList()
                    .id('news')
                    .title('News')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "news" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'news'
                    })
                ),

                S.listItem()
                .title('Service')
                .id('service-docs')
                // .icon(PostIcon)
                .schemaType('service')
                .child(
                  S.documentList()
                    .id('service')
                    .title('Service')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "service" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'service'
                    })
                )
            ]
            )
        ),
    ])
