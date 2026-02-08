
// This is a mock database used to simplify parts of the app not
// relevant to the demo. In a real app, this data would live in
// a relational database like PostgreSQL or MySQL, accessed through
// a database client or ORM.

export type Skill = {
  slug: string;
  name: string;
  description: string;
  checkUser: boolean;
}

export type LearningType = {
  slug: string;
  name: string;
  items: Skill[];
}

const learning_types: LearningType[] = [
  {
    slug: 'character_practice',
    name: '生字練習',
    items: [
      {
        slug: 'sound-radical-words',
        name: '字音部首與字詞',
        description: '基礎學習',
        checkUser: false,
      },
      {
        slug: 'similar-words',
        name: '相似字形',
        description: '進階學習',
        checkUser: false,
      },
      {
        slug: 'sentences',
        name: '句型練習',
        description: '靈活應用',
        checkUser: false,
      },
    ],
  },
  {
    slug: 'games',
    name: '快樂學習',
    items: [
        {
            slug: 'character-marathon',
            name: '生字馬拉松',
            description: '看你能跑多遠',
            checkUser: false,
        }
    ]
  },
  {
    slug: 'teacher',
    name: '老師專區',
    items: [
        {
            slug: 'edit',
            name: '教學資源維護',
            description: '教學資源維護',
            checkUser: true,
        }
    ]
  }
]


export const data = { learning_types };
