export interface Project {
  title: string
  featured: boolean
  categories: string[]
  image: string
  description: string
  technologies: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    title: 'Trainimize',
    featured: true,
    categories: ['Software', 'Fitness', 'Web Application'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80',
    description:
      'A fitness tracking platform focused on logging workouts, exercises, sets, and repetitions while providing analytics and progress tracking.',
    technologies: ['Vue', 'TypeScript'],
    github: '',
    demo: '',
  },

  {
    title: 'Tinnitus',
    featured: true,
    categories: ['Software', 'Healthcare', 'Web Application'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    description:
      'A medical platform supporting tinnitus treatment through patient management, scheduling, communication, and therapy tools.',
    technologies: ['Vue'],
    github: '',
    demo: '',
  },

  {
    title: 'Jormun',
    featured: true,
    categories: ['Games', 'Game Jam', 'Narrative'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80',
    description:
      'A narrative-focused game jam project exploring storytelling, atmosphere, and player immersion.',
    technologies: ['Godot'],
    github: '',
    demo: 'https://godie910.itch.io/jormun',
  },

  {
    title: 'Goblin Game',
    featured: false,
    categories: ['Games', 'RPG', 'Narrative'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80',
    description:
      'An RPG Maker project centered around progression systems, world-building, and role-playing mechanics.',
    technologies: ['RPG Maker'],
    github: 'https://github.com/GoDie910/test-rmmz-ggg',
    demo: '',
  },

  {
    title: 'Experimental Projects',
    featured: false,
    categories: ['Games', 'Prototypes', 'Research'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80',
    description:
      'A collection of prototypes and technical experiments focused on gameplay systems, progression, AI behavior, and player interaction.',
    technologies: ['Godot', 'Unity', 'RPG Maker'],
    github: '',
    demo: '',
  },
]
