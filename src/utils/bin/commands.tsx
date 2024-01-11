// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import Platypus from '../../images/platypus.png';
import Image from 'next/image';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Hello! I'm glad you're here. Here's a list of available commands from this portaledge:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Use 'whoami' for a primer on who I am.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hiya, I'm ${config.name}. 
Welcome to my portledge!
More about me:
'whoami' - who am I.
'resume' - my latest resume.
'readme' - my github readme.
'pixelate' - some pixel art.
'portaledge' - a definition.
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Hitting reddit up for ${args.join(' ')}...`;
};

export const tumblr = async (args: string[]): Promise<string> => {
  window.open(`https://www.tumblr.com/tagged/${args.join(' ')}`);
  return `Wading in the depths of tumblr for ${args.join(' ')}...`;
}

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `nope, you're stuck here`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const pixelate = () => {
  window.open(`${config.platypusImage}`);
  return `A pixel art platypus just arrived`;
};

export const portaledge = () => {
  return `A portable tent system used by rock climbers to sleep in during a climb lasting multiple days.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  _______  _______  ______    _______  _______  ___      _______  ______   _______  _______ 
  |       ||       ||    _ |  |       ||   _   ||   |    |       ||      | |       ||       |
  |    _  ||   _   ||   | ||  |_     _||  |_|  ||   |    |    ___||  _    ||    ___||    ___|
  |   |_| ||  | |  ||   |_||_   |   |  |       ||   |    |   |___ | | |   ||   | __ |   |___ 
  |    ___||  |_|  ||    __  |  |   |  |       ||   |___ |    ___|| |_|   ||   ||  ||    ___|
  |   |    |       ||   |  | |  |   |  |   _   ||       ||   |___ |       ||   |_| ||   |___ 
  |___|    |_______||___|  |_|  |___|  |__| |__||_______||_______||______| |_______||_______|
  
  
Type 'help' to see the list of available commands.
Type 'whoami' to return a summary of yours truly, occupant of this portaledge.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository of this site.

Site inspired by https://github.com/m4tt72/terminal and https://github.com/Cveinnt/LiveTerm
`;
};
