import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
		defineField({
      name: 'id',
      title: 'Id',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'linkToBuild1',
      title: 'LinkToBuild1',
      type: 'url',
    }),
    defineField({
      name: 'linkToBuild2',
      title: 'LinkToBuild2',
      type: 'url',
    }),
  ],
})
