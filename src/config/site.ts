// Site configuration
export const SITE = {
  title: 'Kanata Boxing',
  description: 'Learn to move like a butterfly and sting like a bee while improving your fitness, confidence, and overall well-being in a fun and supportive environment!',
  url: 'kanataboxing.ca',
  author: 'Ken. BB',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '' },
  { name: 'More Information About Boxing', href: '/boxing' },
  { name: 'Benefits of boxing for children', href: '/boxing_benefits' },
  { name: 'Contact Us', href: 'https://forms.gle/A4D25asZgPLvw8QF6' }
] as const;

export const MARTIAL_ARTS = [
    { name: 'Home', href: '/' },
    { name: 'More Information About Boxing', href: '/boxing' },
    { name: 'Benefits of boxing for children', href: '/boxing_benefits' },
    { name: 'Contact Us', href: 'https://forms.gle/A4D25asZgPLvw8QF6' }
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/yourcompany',
} as const;

