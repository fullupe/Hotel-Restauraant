import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
   
    defineField({
        name: 'roomnumber',
        title: 'RoomNumber',
        type: 'array',
        of: [{type: 'reference', to: {type: 'rooms'}}],
      }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'ContactNumber',
      type: 'string',
    }),
    defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      }),
  ],
})