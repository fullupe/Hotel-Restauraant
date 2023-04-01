import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    defineField({
      name: 'foodtype',
      title: 'Foodtype (Description)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: "number",
    }),
    defineField({
      name: 'Isproductavailable',
      title: 'IsAvailable (YES) or (NO)',
      type: "boolean",
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
 
    defineField({
      name: 'img',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    
  ],


})
