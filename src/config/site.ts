// Site configuration
export const SITE = {
  title: 'Kanata Boxing',
  description: 'Learn to move like a butterfly and sting like a bee while improving your fitness, confidence, and overall well-being in a fun and supportive environment!',
  url: 'https://philliams.github.io/kanata_boxing',
  author: 'Ken. BB',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/kanata_boxing' },
  { name: 'More Information About Boxing', href: '/kanata_boxing/boxing' },
  { name: 'Benefits of boxing for children', href: '/kanata_boxing/boxing_benefits' },
  { name: 'Contact Us', href: 'https://forms.gle/A4D25asZgPLvw8QF6' }
] as const;

export const MARTIAL_ARTS = [
    { name: 'More Information About Boxing', href: '/kanata_boxing/boxing' },
    { name: 'Benefits of boxing for children', href: '/kanata_boxing/boxing_benefits' },
    { name: 'Contact Us', href: 'https://forms.gle/A4D25asZgPLvw8QF6' }
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/yourcompany',
} as const;

