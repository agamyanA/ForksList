import { trigger, transition, query, style, animate } from "@angular/animations";

export const slideAnimation = 
    trigger('routeAnimation', [
        transition('* <=> *', [
            query(':enter', style({transform: 'translateX(100%)'}), {optional: true}),
            query(':leave', [animate('700ms ease'), style({transform: 'translateX(-100%)'})], {optional: true})
        ])
    ])
    
export const rowAnimation = 
    trigger('rowAnimation', [
        transition('* => void', [
            animate('0ms', style({display: 'none'}))
        ])
    ])