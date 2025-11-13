import { clsx } from 'clsx';
          import { twMerge } from 'tailwind-merge';
          
          /**
           * Merge classes with tailwind-merge and clsx
           */
          export function cn(...inputs) {
            return twMerge(clsx(inputs));
          }