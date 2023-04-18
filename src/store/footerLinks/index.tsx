import {
  GitHub,
  Instagram,
  LinkedIn,
  SvgIconComponent,
  Twitter,
  WhatsApp,
  YouTube,
} from '@mui/icons-material';
import { MLinkProps } from '@cc/mLink';

export const linkSections: Record<string, Record<string, string>> = {
  Company: {
    ['dao-Custodians']: '/dao-Custodians',
    investors: ',investors',
    ['press-and-media']: '/press-and-media',
    careers: '/careers',
  },
  legal: {
    ['terms-and-conditions']: '/terms-and-conditions',
    ['privacy-policy']: '/privacy-policy',
    ['risk-disclosuer-Policy']: '/risk-disclosuer-Policy',
    ['Aml-&-kyc-policy']: '/terms-and-conditions',
  },
  // ['Kratos Studios Ltd.']: {
  //   ['OMC-chambers-wickhams-cay 1,-road-town,-tortola,-british-virgin-island']:
  //     '/OMC-chambers-wickhams-cay 1,-road-town,-tortola,-british-virgin-island',
  //   ['mail us at contact@indi.gg']: '/mail us at contact@indi.gg',
  // },
  // resources: {
  //   games: '/games',
  //   clans: '/clans',
  //   quests: '/quests',
  // },
  // developers: {
  //   documents: '/documents',
  //   ['indigg']: 'https://indigg.vercel.app',
  // },
};
export const socialLinks: {
  name: string;
  icon: SvgIconComponent;
  link: MLinkProps['href'];
  color: string;
}[] = [
  {
    name: 'Twitter',
    icon: Twitter,
    link: 'https://twitter.com/indigg',
    color: '#1DA1F2',
  },
  {
    name: 'LinkedIn',
    icon: LinkedIn,
    link: 'https://www.linkedin.com/company/indigg',
    color: '#0A66C2',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    link: 'https://www.instagram.com/indigg',
    color: '#E1306C',
  },
  {
    name: 'Youtube',
    icon: YouTube,
    link: 'https://www.youtube.com/channel/indigg',
    color: '#FF0000',
  },
  {
    name: 'Whatsapp',
    icon: WhatsApp,
    link: 'https://wa.me/',
    color: '#25D366',
  },
  {
    name: 'Github',
    icon: GitHub,
    link: 'https://github.com',
    color: '#000000',
  },
];
