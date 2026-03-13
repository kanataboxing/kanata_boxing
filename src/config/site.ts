// Site configuration
export const SITE = {
  title: 'Master Ken',
  description: '-- Put Small Description Blurb --',
  url: 'https://philliams.github.io/master_ken',
  author: 'Master ken',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/master_ken' },
  { name: 'About', href: '/master_ken/about'},
  { name: 'Adult Programs', href: '/master_ken/adult_programs' },
  { name: 'Child Programs', href: '/master_ken/child_programs' },
  { name: 'Blog', href: '/master_ken/blog' }
] as const;

export const MARTIAL_ARTS = [
    { name: 'Taekwondo', href: '/master_ken/martial_arts/taekwondo' },
    { name: 'Hapkido', href: '/master_ken/martial_arts/hapkido' },
    { name: 'Boxing', href: '/master_ken/martial_arts/boxing' }
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

