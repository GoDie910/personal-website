export type Project = {
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
    title: 'JÖRMUN',
    featured: true,
    categories: ['Games', 'Game Jam', 'Narrative'],
    image: 'https://img.itch.zone/aW1nLzIyNTAzMDEyLmpwZw==/original/C%2FJdqe.jpg',
    description:
      'A collaborative GMTK Game Jam project built with a small team. A Norse mythology-inspired infinite runner where Thor confronts Jörmun during Ragnarok in a looping world mechanic.',
    technologies: ['Godot'],
    github: '',
    demo: 'https://godie910.itch.io/jormun',
  },

  {
    title: 'Depths of Avarice',
    featured: true,
    categories: ['Games', 'Game Jam', 'Strategy'],
    image: 'https://img.itch.zone/aW1nLzIyOTYzNDA4LmpwZw==/original/GTKZlm.jpg',
    description:
      'A collaborative Brackeys Game Jam project about a greedy goblin venturing deeper into a dragon’s lair, balancing risk and reward in pursuit of treasure.',
    technologies: ['Godot'],
    github: '',
    demo: 'https://black-pill.itch.io/depths-of-avarice',
  },
]
