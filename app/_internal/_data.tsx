
// This is a mock database used to simplify parts of the app not
// relevant to the demo. In a real app, this data would live in
// a relational database like PostgreSQL or MySQL, accessed through
// a database client or ORM.

export type Skill = {
  slug: string;
  name: string;
  description: string;
}

export type LearningType = {
  slug: string;
  name: string;
  items: Skill[];
}

export type Lession = {
  id: string;
  name: string;
  description?: string;
  slug: string;
  active: boolean;
}

export type Character = {
  id: string;
  character: string;
  radical: string;
  sounds: string[];
  similars: string[];
  lession: string;
}

export type Sound = {
  id: string;
  sound: string;
  words: string[];
}

export type Sentence = {
  id: string;
  format: string;
  sample: string;
  lession: string;
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
      },
      {
        slug: 'similar-words',
        name: '相似字形',
        description: '進階學習',
      },
      {
        slug: 'sentences',
        name: '句型練習',
        description: '靈活應用',
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
            description: '看你能跑多遠'
        }
    ]
  }
]
const lessions: Lession[] = [
    {
        "id": "1",
        "slug": "lession1",
        "name": "第一課",
        "description": "XXX",
        "active": true
    },
    {
        "id": "2",
        "slug": "lession2",
        "name": "第二課",
        "description": "XXX",
        "active": true
    },
    {
        "id": "3",
        "slug": "lession3",
        "name": "第三課",
        "description": "XXX",
        "active": false
    },
    {
        "id": "4",
        "slug": "lession4",
        "name": "第四課",
        "description": "XXX",
        "active": false
    },
    {
        "id": "5",
        "slug": "lession5",
        "name": "第五課",
        "description": "XXX",
        "active": false
    }
];
const characters: Character[] = [
    {
        "id": "1",
        "character": "要",
        "radical": "襾(ㄧㄚˋ)",
        "lession": "1",
        "sounds": [
            "1",
            "2"
        ],
        "similars": [
            "2",
            "3",
            "4"
        ]
    },
    {
        "id": "2",
        "character": "耍",
        "radical": "襾(ㄧㄚˋ)",
        "lession": "None",
        "sounds": [
            "3"
        ],
        "similars": []
    },
    {
        "id": "3",
        "character": "需",
        "radical": "雨(ㄩˇ)",
        "lession": "None",
        "sounds": [
            "4"
        ],
        "similars": []
    },
    {
        "id": "4",
        "character": "腰",
        "radical": "肉(ㄖㄡˋ)",
        "lession": "None",
        "sounds": [
            "5"
        ],
        "similars": []
    },
    {
        "id": "5",
        "character": "靜",
        "radical": "青(ㄑㄧㄥ)",
        "lession": "1",
        "sounds": [
            "6"
        ],
        "similars": [
            "6"
        ]
    },
    {
        "id": "6",
        "character": "的",
        "radical": "白",
        "lession": "2",
        "sounds": [
            "7"
        ],
        "similars": []
    },
    {
        "id": "7",
        "character": "天",
        "radical": "大(ㄉㄚˋ)",
        "lession": "1",
        "sounds": [
            "8"
        ],
        "similars": [
            "6"
        ]
    },
    {
        "id": "8",
        "character": "空",
        "radical": "穴(ㄒㄩㄝˋ)",
        "lession": "1",
        "sounds": [
            "9"
        ],
        "similars": []
    },
    {
        "id": "9",
        "character": "雲",
        "radical": "雨(ㄩˇ)",
        "lession": "1",
        "sounds": [
            "10"
        ],
        "similars": [
            "6"
        ]
    }
];
const sounds: Sound[] = [
    {
        "id": "1",
        "sound": "ㄧㄠˋ",
        "words": [
            "重要",
            "必要",
            "只要",
            "將要"
        ]
    },
    {
        "id": "2",
        "sound": "ㄧㄠ",
        "words": [
            "要約",
            "要求",
            "要脅"
        ]
    },
    {
        "id": "3",
        "sound": "ㄕㄨㄚˇ",
        "words": [
            "玩耍"
        ]
    },
    {
        "id": "4",
        "sound": "ㄒㄩ",
        "words": [
            "需要"
        ]
    },
    {
        "id": "5",
        "sound": "ㄧㄠ",
        "words": [
            "腰包"
        ]
    },
    {
        "id": "6",
        "sound": "ㄐㄧㄥˋ",
        "words": [
            "風平浪靜",
            "夜深人靜",
            "平心靜氣"
        ]
    },
    {
        "id": "7",
        "sound": "ㄉㄜ˙",
        "words": [
            "你的"
        ]
    },
    {
        "id": "8",
        "sound": "ㄊㄧㄢ",
        "words": [
            "天下無敵",
            "天涯海角",
            "杞人憂天",
            "異想天開",
            "歡天喜地"
        ]
    },
    {
        "id": "9",
        "sound": "ㄎㄨㄥ",
        "words": [
            "空白",
            "空地",
            "空間",
            "抽空",
            "空隙"
        ]
    },
    {
        "id": "10",
        "sound": "ㄩㄣˊ",
        "words": [
            "雲淡風輕",
            "平步青雲",
            "白雲",
            "雲朵",
            "烏雲"
        ]
    }
];
const sentences: Sentence[] = [
    {
        "id": "1",
        "lession": "1",
        "format": "誰 + 做什麼事情(動作)",
        "sample": "媽媽 聽音樂 / 弟弟 跌倒了"
    },
    {
        "id": "2",
        "lession": "1",
        "format": "誰 + 怎麼樣(形容)",
        "sample": "媽媽 好開心 / 弟弟 好傷心"
    },
    {
        "id": "3",
        "lession": "1",
        "format": "...是......",
        "sample": "這 是 媽媽買給我的玩具"
    },
    {
        "id": "4",
        "lession": "1",
        "format": "(兩人以上)...一起......",
        "sample": "哥哥和我 一起 下棋 / 我們一起出去玩"
    },
    {
        "id": "5",
        "lession": "1",
        "format": "...也......(合併句子)",
        "sample": "我喜歡唱歌 + 我喜歡跳舞\n(合併) 我喜歡唱歌,也喜歡跳舞。\n媽媽喜歡跳舞+爸爸喜歡跳舞\n(合併) 媽媽喜歡跳舞,爸爸也喜歡跳舞。"
    }
];


export const data = { learning_types, lessions, characters, sounds, sentences };
