import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rooms',
  title: 'Rooms',
  type: 'document',
  fields: [
    defineField({
      name: 'room',
      title: 'Room',
      type: 'string',
    }),
    
  ],
})