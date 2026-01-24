// This is a mock database used to simplify parts of the app not
// relevant to the demo. In a real app, this data would live in
// a relational database like PostgreSQL or MySQL, accessed through
// a database client or ORM.

export type Character = {
  id: string;
  character: string;
  radical: string;
  sounds: Sound[];
  similars: Character[]
}

export type Sound = {
  id: string;
  sound: string;
  words: string[];
}

export type Lession = {
  id: string;
  slug: string;
  name: string;
  description: string;
  characters: Character[];
};

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

export type Sentence = {
  id: string;
  format: string;
  sample: string;
}

export type SentenceLession = {
  id: string;
  slug: string;
  name: string;
  description: string;
  sentences: Sentence[];
};

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
  }
]

const character_learning_lessions: Lession[] = [
  {
    id: '1',
    slug: 'lesson1',
    name: '第一課',
    description: 'XXX',
    characters: [
      {
        id: '1',
        character: '要',
        radical: '襾(ㄧㄚˋ)',
        sounds: [
          { id: '1', sound: 'ㄧㄠˋ', words: ['重要', '必要', '只要', '將要'] },
          { id: '2', sound: 'ㄧㄠ', words: ['要約', '要求', '要脅'] },
        ],
        similars: [
          {
            id: '1',
            character: '耍',
            radical: '襾(ㄧㄚˋ)',
            sounds: [
              { id: '1', sound: 'ㄕㄨㄚˇ', words: ['玩耍'] },
            ],
            similars: [],
          },
          {
            id: '2',
            character: '需',
            radical: '雨(ㄩˇ)',
            sounds: [
              { id: '1', sound: 'ㄒㄩ', words: ['需要'] },
            ],
            similars: [],
          },
          {
            id: '3',
            character: '腰',
            radical: '肉(ㄖㄡˋ)',
            sounds: [
              { id: '1', sound: 'ㄧㄠ', words: ['腰包'] },
            ],
            similars: [],
          },
          {
            id: '4',
            character: '腰',
            radical: '肉(ㄖㄡˋ)',
            sounds: [
              { id: '1', sound: 'ㄧㄠ', words: ['腰包'] },
            ],
            similars: [],
          },
        ]
      },
      {
        id: '2',
        character: '靜',
        radical: '青(ㄑㄧㄥ)',
        sounds: [
          { id: '1', sound: 'ㄐㄧㄥˋ', words: ['風平浪靜', '夜深人靜', '平心靜氣'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [],
          }
        ]
      },
      {
        id: '3',
        character: '天',
        radical: '大(ㄉㄚˋ)',
        sounds: [
          { id: '1', sound: 'ㄊㄧㄢ', words: ['天下無敵', '天涯海角', '杞人憂天', '異想天開', '歡天喜地'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [],
          }
        ]
      },
      {
        id: '4',
        character: '空',
        radical: '穴(ㄒㄩㄝˋ)',
        sounds: [
          { id: '1', sound: 'ㄎㄨㄥ', words: ['空空如也', '海闊天空', '天馬行空', '空無一物'] },
          { id: '2', sound: 'ㄎㄨㄥˋ', words: ['空白', '空地', '空間', '抽空', '空隙'] },
        ],
        similars: [],
      },
      {
        id: '5',
        character: '雲',
        radical: '雨(ㄩˇ)',
        sounds: [
          { id: '1', sound: 'ㄩㄣˊ', words: ['雲淡風輕', '平步青雲', '白雲', '雲朵', '烏雲'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [],
          }
        ]
      },
    ],
  },

  {
    id: '2', slug: 'lesson2', name: '第二課', description: 'OOO', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
  {
    id: '3', slug: 'lesson3', name: '第三課', description: 'VVV', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
  {
    id: '4', slug: 'lesson4', name: '第四課', description: 'OOO', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
  {
    id: '5', slug: 'lesson5', name: '第五課', description: 'VVV', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
  {
    id: '6', slug: 'lesson6', name: '第六課', description: 'XXX', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
  {
    id: '7', slug: 'lesson7', name: '第七課', description: 'OOO', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
  {
    id: '8', slug: 'lesson8', name: '第八課', description: 'VVV', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
  {
    id: '9', slug: 'lesson9', name: '第九課', description: 'XXX', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
  {
    id: '10', slug: 'lesson10', name: '第十課', description: 'OOO', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
  {
    id: '11', slug: 'lesson11', name: '第十一課', description: 'VVV', characters: [
      {
        id: '1',
        character: '的',
        radical: '白',
        sounds: [
          { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
        ],
        similars: [
          {
            id: '1',
            character: '的',
            radical: '白',
            sounds: [
              { id: '1', sound: 'ㄉㄜ˙', words: ['你的'] },
            ],
            similars: [

            ]
          }
        ]
      }
    ]
  },
];

const sentence_learning_lessions: SentenceLession[] = [
  {
    id: '1', slug: 'lesson1', name: '第一課', description: 'VVV',
    sentences: [
      {
        id: '1',
        format: '誰 + 做什麼事情(動作)',
        sample: '媽媽 聽音樂 / 弟弟 跌倒了'
      },
      {
        id: '2',
        format: '誰 + 怎麼樣(形容)',
        sample: '媽媽 好開心 / 弟弟 好傷心'
      },
      {
        id: '3',
        format: '...是......',
        sample: '這 是 媽媽買給我的玩具'
      },
      {
        id: '4',
        format: '(兩人以上)...一起......',
        sample: '哥哥和我 一起 下棋 / 我們一起出去玩'
      },
      {
        id: '5',
        format: '誰 + 做什麼事情(動作)',
        sample: '媽媽 聽音樂 / 弟弟 跌倒了'
      },
      {
        id: '6',
        format: '...也......(合併句子)',
        sample: '我喜歡唱歌 + 我喜歡跳舞\n(合併) 我喜歡唱歌,也喜歡跳舞。\n媽媽喜歡跳舞+爸爸喜歡跳舞\n(合併) 媽媽喜歡跳舞,爸爸也喜歡跳舞。'
      },
    ],
  },
];




export const data = { learning_types, character_learning_lessions, sentence_learning_lessions };