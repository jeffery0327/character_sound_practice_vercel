// This is a mock ORM (inspired by Prisma's API) used to simplify
// parts of the app not relevant to the demo. It is not intended
// as a learning resource or example of best practices.

import 'server-only';


import {
  data,
  LearningType,
  Skill,
  Lession,
  Sound,
  Character,
  Sentence,
} from '@/app/_internal/_data'

type SkillWhere = { slug?: string }
type SkillFindOption = { where?: SkillWhere, limit?: number }

type LessionWhere = { slug?: string }
type LessionFindOption = { where?: LessionWhere, limit?: number }

type SentenceWhere = { lessionId?: string }
type SentenceFindOption = { where?: SentenceWhere, limit?: number }

type CharacterWhere = { lessionId?: string, characterId?: string }
type CharacterFindOption = { where?: CharacterWhere, limit?: number }


export type CompletedCharacter = {
  id: string;
  character: string;
  radical: string;
  sounds: Sound[];
  similars: CompletedCharacter[];
  lession: Lession;
}

const db = {
  learningType: {
    findAll: () => {
      return data.learning_types
    }
  },
  skill: {
    find: (options: SkillFindOption) => {
      let skill: Skill | undefined

      if (options.where?.slug != undefined) {
        for (const learningType of data.learning_types) {
          const found = learningType.items.find(
            (l) => l.slug === options.where?.slug
          );
          if (found) {
            skill = found
            break;
          }
        }
      }

      if (typeof skill === 'undefined') {
        throw new Error(`Skill not found: ${options.where?.slug}`);
      }

      return skill;
    },
  },
  lession: {
    find: (options: LessionFindOption) => {
      let lession: Lession | undefined;

      if (options.where?.slug != undefined) {
        lession = data.lessions.find((l) => l.slug === options.where?.slug);
      }

      return lession;
    },
    findMany: (options: LessionFindOption) => {
      let lessions = data.lessions;

      if (options.where?.slug != undefined) {
        lessions = lessions.filter((l) => l.slug === options.where?.slug);
      }
      return lessions;
    }
  },
  sentence: {
    findMany: (options: SentenceFindOption) => {
      let sentences = data.sentences;

      if (options.where?.lessionId != undefined) {
        sentences = sentences.filter((l) => l.lession === options.where?.lessionId);
      }
      return sentences;
    }
  },
  character: {
    find: (options: CharacterFindOption) => {
      let character: Character | undefined;

      if (options.where?.characterId != undefined) {
        character = data.characters.find((r) => r.id === options.where?.characterId);
      }

      if (!character) {
        return character;
      }
      
      const sounds = data.sounds.filter((s) => character.sounds.includes(s.id));
      const similars = data.characters.filter((r) => character.similars.includes(r.id)).map((similar) => {
        const similarSounds = data.sounds.filter((sound) => similar.sounds.includes(sound.id));
        return {
          id: similar.id,
          character: similar.character,
          radical: similar.radical,
          sounds: similarSounds,
          similars: [],
          lession: { id: character.lession, name: '', description: '', slug: '', active: false },
        }
      });
      const lession = data.lessions.find((r) => r.id === character.lession);

      const result = {
        id: character.id,
        character: character.character,
        radical: character.radical,
        sounds: sounds,
        similars: similars,
        lession: lession ? lession : { id: character.lession, name: '', description: '', slug: '', active: false },
      }
      return result;
    },
    findMany: (options: CharacterFindOption) => {
      let characters = data.characters;

      if (options.where?.lessionId != undefined) {
        characters = characters.filter((l) => l.lession === options.where?.lessionId);
      }

      let completedCharacters: CompletedCharacter[] = characters.map((c) => {
        const sounds = data.sounds.filter((s) => c.sounds.includes(s.id));
        const similars = data.characters.filter((r) => c.similars.includes(r.id)).map((similar) => {
          const similarSounds = data.sounds.filter((s) => similar.sounds.includes(s.id));
          return {
            id: similar.id,
            character: similar.character,
            radical: similar.radical,
            sounds: similarSounds,
            similars: [],
            lession: { id: c.lession, name: '', description: '', slug: '', active: false },
          }
        });
        const lession = data.lessions.find((r) => r.id === c.lession);

        return {
          id: c.id,
          character: c.character,
          radical: c.radical,
          sounds: sounds,
          similars: similars,
          lession: lession ? lession : { id: c.lession, name: '', description: '', slug: '', active: false },
        }
      })

      return completedCharacters;
    },
  }
}

export default db;

export type { LearningType, Skill, Lession, Character, Sound, Sentence };