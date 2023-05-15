export default {
  title: 'User', //sanity stidio에서 보이는 title
  name: 'user', //모델의 이름
  type: 'document',
  fields: [
    //어떤 데이터 fields가 있는지 정의해주기
    {
      title: 'Username', //sanity stidio에서 보이는 이름
      name: 'username', //id와 비슷한 것, 코드에서 key
      type: 'string', //name이라는 type은 string
    },
    {
      title: 'Name', //사용자의 실제 이름
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
    },
  ],
}
