import type { SkillCategory } from '@/types'
import gsapLogo from '@/assets/gsap.svg'
import pixiLogo from '@/assets/pixijs.svg'

export const skillCategories: SkillCategory[] = [
  {
    title: 'skills.categories.frontend',
    skills: [
      { name: 'Vue 3', icon: 'logos:vue' },
      { name: 'Angular', icon: 'logos:angular-icon' },
      { name: 'React', icon: 'logos:react' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'Responsive Design', icon: 'mdi:monitor-cellphone' },
      { name: 'UI Architecture', icon: 'mdi:view-dashboard-outline' },
      { name: 'GSAP', image: gsapLogo },
      { name: 'PixiJS', image: pixiLogo },
      { name: 'Vuetify', icon: 'logos:vuetifyjs' },
      { name: 'Vite', icon: 'logos:vitejs' },
      { name: 'Pinia', icon: 'logos:pinia' },
    ],
  },
  {
    title: 'skills.categories.backend',
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'FastAPI', icon: 'logos:fastapi-icon' },
      { name: 'ASP.NET Core', icon: 'logos:dotnet' },
      { name: 'PHP', icon: 'logos:php' },
      { name: 'REST APIs', icon: 'mdi:api' },
      { name: 'WebSockets', icon: 'mdi:connection' },
      { name: 'Authentication', icon: 'mdi:shield-lock-outline' },
      { name: 'Business Logic', icon: 'mdi:cog-outline' },
    ],
  },
  {
    title: 'skills.categories.databases',
    skills: [
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'MySQL', icon: 'logos:mysql' },
      { name: 'SQL Server', icon: 'mdi:database-cog' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
    ],
  },
  {
    title: 'skills.categories.devops',
    skills: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'logos:github-icon' },
      { name: 'GitHub Actions', icon: 'logos:github-actions' },
      { name: 'GitLab', icon: 'logos:gitlab-icon' },
      { name: 'Netlify', icon: 'logos:netlify' },
      { name: 'Vitest', icon: 'logos:vitest' },
      { name: 'CI/CD', icon: 'mdi:source-branch-sync' },
      { name: 'Deployment', icon: 'mdi:rocket-launch-outline' },
    ],
  },
  {
    title: 'skills.categories.gameDev',
    skills: [
      { name: 'Godot', icon: 'logos:godot-icon' },
      { name: 'Unity', icon: 'logos:unity' },
      { name: 'RPG Maker MZ', icon: 'mdi:sword-cross' },
      { name: 'Systems Design', icon: 'mdi:sitemap-outline' },
    ],
  },
  {
    title: 'skills.categories.tools',
    skills: [
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Postman', icon: 'logos:postman-icon' },
      { name: 'Swagger', icon: 'logos:swagger' },
      { name: 'Technical Documentation', icon: 'mdi:file-document-outline' },
      { name: 'Debugging', icon: 'mdi:bug-outline' },
      { name: 'Code Review', icon: 'mdi:source-pull' },
      { name: 'Agile Workflows', icon: 'mdi:sync' },
    ],
  },
]
