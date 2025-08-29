import React from 'react';
import { 
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaTiktok,
  FaYoutube,
  FaMedium,
  FaDev,
  FaBehance,
  FaProductHunt,
  FaRss,
  FaMastodon,
  FaFigma
} from 'react-icons/fa';
import { RxDiscordLogo } from 'react-icons/rx';
import { TbBrandFiverr } from 'react-icons/tb';
import { 
  SiThreads, 
  SiHashnode, 
  SiSubstack, 
  SiGumroad, 
  SiCodeforces, 
  SiLeetcode, 
  SiWellfound,
  SiPeerlist
} from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';

export interface SocialMediaLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Social Media Links Configuration
export const socialMediaLinks: Record<string, SocialMediaLink> = {
  github: {
    name: 'GitHub',
    url: 'https://github.com/hassanxtech',
    icon: FaGithub,
  },
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com/hassantech',
    icon: FaInstagram,
  },
  twitter: {
    name: 'Twitter (X)',
    url: 'https://twitter.com/HassanXTech',
    icon: BsTwitterX,
  },
  threads: {
    name: 'Threads',
    url: 'https://threads.net/@hassantech',
    icon: SiThreads,
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/HassanTech',
    icon: FaLinkedin,
  },
  // fiverr: {
  //   name: 'Fiverr',
  //   url: 'https://www.fiverr.com/hasan0x',
  //   icon: TbBrandFiverr,
  // },
  peerlist: {
    name: 'Peerlist',
    url: 'https://peerlist.io/hassantech',
    icon: SiPeerlist,
  },
  discord: {
    name: 'Discord',
    url: 'https://discord.com/users/1136625769628581928',
    icon: RxDiscordLogo,
  },
  hashnode: {
    name: 'Hashnode',
    url: 'https://hassantech.hashnode.dev',
    icon: SiHashnode,
  },
  // medium: {
  //   name: 'Medium',
  //   url: '',
  //   icon: FaMedium,
  // },
  // substack: {
  //   name: 'Substack',
  //   url: '',
  //   icon: SiSubstack,
  // },
  // dev: {
  //   name: 'DEV',
  //   url: '',
  //   icon: FaDev,
  // },
  // youtube: {
  //   name: 'YouTube',
  //   url: '',
  //   icon: FaYoutube,
  // },
  // gumroad: {
  //   name: 'Gumroad',
  //   url: '',
  //   icon: SiGumroad,
  // },
  // producthunt: {
  //   name: 'Product Hunt',
  //   url: '',
  //   icon: FaProductHunt,
  // },
  // rss: {
  //   name: 'RSS Feed',
  //   url: '',
  //   icon: FaRss,
  // },
  // codeforces: {
  //   name: 'CodeForces',
  //   url: '',
  //   icon: SiCodeforces,
  // },
  // leetcode: {
  //   name: 'LeetCode',
  //   url: '',
  //   icon: LeetcodeIcon,
  // },
  // wellfound: {
  //   name: 'Wellfound',
  //   url: '',
  //   icon: SiWellfound,
  // },
  // mastodon: {
  //   name: 'Mastodon',
  //   url: '',
  //   icon: FaMastodon,
  // },
  // behance: {
  //   name: 'Behance',
  //   url: '',
  //   icon: FaBehance,
  // },
  // tiktok: {
  //   name: 'TikTok',
  //   url: 'https://www.tiktok.com/@HassanTech',
  //   icon: FaTiktok,
  // },
  // flagma: {
  //   name: 'Flagma',
  //   url: '',
  //   icon: FaFigma,
  // },
};
export const getActiveSocialMediaLinks = (): SocialMediaLink[] => {
  return Object.values(socialMediaLinks).filter(link => link.url && link.url.trim() !== '');
};