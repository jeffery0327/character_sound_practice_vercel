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
  }
]

const lessions: Lession[] = [
  { id: '1', name: '第一課', description: 'XXX', slug: 'lession1', active: true },
  { id: '2', name: '第二課', description: 'XXX', slug: 'lession2', active: true },
  { id: '3', name: '第三課', description: 'XXX', slug: 'lession3', active: false },
  { id: '4', name: '第四課', description: 'XXX', slug: 'lession4', active: false },
  { id: '5', name: '第五課', description: 'XXX', slug: 'lession5', active: false },
]

const characters: Character[] = [
  { id: '1', character: '要', radical: '襾(ㄧㄚˋ)', sounds: ['1', '2'], similars: ['2', '3', '4'], lession: '1' },
  { id: '2', character: '耍', radical: '襾(ㄧㄚˋ)', sounds: ['3'], similars: [], lession: '' },
  { id: '3', character: '需', radical: '雨(ㄩˇ)', sounds: ['4'], similars: [], lession: '' },
  { id: '4', character: '腰', radical: '肉(ㄖㄡˋ)', sounds: ['5'], similars: [], lession: '' },
  { id: '5', character: '靜', radical: '青(ㄑㄧㄥ)', sounds: ['6'], similars: ['6'], lession: '1' },
  { id: '6', character: '的', radical: '白', sounds: ['7'], similars: [], lession: '2' },
  { id: '7', character: '天', radical: '大(ㄉㄚˋ)', sounds: ['8'], similars: ['6'], lession: '1' },
  { id: '8', character: '空', radical: '穴(ㄒㄩㄝˋ)', sounds: ['9', '10'], similars: [], lession: '1' },
  { id: '9', character: '雲', radical: '雨(ㄩˇ)', sounds: ['11'], similars: ['6'], lession: '1' },
]

const sounds: Sound[] = [
  { id: '1', sound: 'ㄧㄠˋ', words: ['重要', '必要', '只要', '將要'] },
  { id: '2', sound: 'ㄧㄠ', words: ['要約', '要求', '要脅'] },
  { id: '3', sound: 'ㄕㄨㄚˇ', words: ['玩耍'] },
  { id: '4', sound: 'ㄒㄩ', words: ['需要'] },
  { id: '5', sound: 'ㄧㄠ', words: ['腰包'] },
  { id: '6', sound: 'ㄐㄧㄥˋ', words: ['風平浪靜', '夜深人靜', '平心靜氣'] },
  { id: '7', sound: 'ㄉㄜ˙', words: ['你的'] },
  { id: '8', sound: 'ㄊㄧㄢ', words: ['天下無敵', '天涯海角', '杞人憂天', '異想天開', '歡天喜地'] },
  { id: '9', sound: 'ㄎㄨㄥ', words: ['空空如也', '海闊天空', '天馬行空', '空無一物'] },
  { id: '10', sound: 'ㄎㄨㄥˋ', words: ['空白', '空地', '空間', '抽空', '空隙'] },
  { id: '11', sound: 'ㄩㄣˊ', words: ['雲淡風輕', '平步青雲', '白雲', '雲朵', '烏雲'] },
]

const sentences: Sentence[] = [
  { id: '1', format: '誰 + 做什麼事情(動作)', sample: '媽媽 聽音樂 / 弟弟 跌倒了', lession: '1' },
  { id: '2', format: '誰 + 怎麼樣(形容)', sample: '媽媽 好開心 / 弟弟 好傷心', lession: '1' },
  { id: '3', format: '...是......', sample: '這 是 媽媽買給我的玩具', lession: '1' },
  { id: '4', format: '(兩人以上)...一起......', sample: '哥哥和我 一起 下棋 / 我們一起出去玩', lession: '1' },
  { id: '5', format: '...也......(合併句子)', sample: '我喜歡唱歌 + 我喜歡跳舞\n(合併) 我喜歡唱歌,也喜歡跳舞。\n媽媽喜歡跳舞+爸爸喜歡跳舞\n(合併) 媽媽喜歡跳舞,爸爸也喜歡跳舞。', lession: '1' },
]

export const data = { learning_types, lessions, characters, sounds, sentences };