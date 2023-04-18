import { SocialFeedbackCardProps } from '@c/productsPage/detailsPage/layout/social/feedbackCard';
import socialAvatar from './images/social_avatar.png';

export const socialFeedbacks: SocialFeedbackCardProps['data'][] = [
  {
    avatar: socialAvatar,
    title: 'Web3 Gaming Marketplace',
    subheader: 'web3gamingmarketplace',
    commentCount: 4,
    description: `Exciting news! Our latest blockchain-based game is now 
available in the marketplace. Get ready to battle it out`,
    tags: ['blockchaingames'],
    forwardCount: 10,
    likeCount: 4,
    postedAt: '14 hours ago',
    links: ['http//t.co?8TJDD7gjUJ'],
  },
  {
    avatar: socialAvatar,
    title: 'Web3 Gaming Marketplace',
    subheader: 'web3gamingmarketplace',
    commentCount: 15,
    description: `We're thrilled to announce that we've just added a new
 game developer to our platform. Welcome aboard!`,
    tags: ['web3gaming', 'blockchaindevelopers'],
    forwardCount: 12,
    likeCount: 20,
    postedAt: '17 hours ago',
    links: ['http//t.co?8TJDD7gjUJ'],
  },
  {
    avatar: socialAvatar,
    title: 'Web3 Gaming Marketplace',
    subheader: 'web3gamingmarketplace',
    commentCount: 8,
    description: `Are you ready to take your gaming experience to the next level?
 Our marketplace offers a variety of blockchain-based games`,
    tags: ['web3gaming', 'blockchaingames'],
    forwardCount: 5,
    likeCount: 2,
    postedAt: '18 hours ago',
    links: ['http//t.co?8TJDD7gjUJ'],
  },
];