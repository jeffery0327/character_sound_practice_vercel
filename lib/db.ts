// This is a mock ORM (inspired by Prisma's API) used to simplify
// parts of the app not relevant to the demo. It is not intended
// as a learning resource or example of best practices.

import 'server-only';

import {
  data,
  LearningType,
  Skill,
} from '@/app/_internal/_data'

type SkillWhere = { slug?: string }
type SkillFindOption = { where?: SkillWhere, limit?: number }

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
  }
}

export default db;

export type { LearningType, Skill };