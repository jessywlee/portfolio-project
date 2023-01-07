import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the skill',
      type: 'string',
    }),
    defineField({
      name: 'skillImage',
      title: 'SkillImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
