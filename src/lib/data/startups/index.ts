import { Startup } from '@/lib/types';
import { aiassist } from './aiassist';
import { saasdirectories } from './saasdirectories';


export const startups: Startup[] = [
  
 aiassist,
saasdirectories,
];