import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
/**
 * Theme provider service
 */
export class ThemeService {
    public theme: BehaviorSubject<string> = new BehaviorSubject<string>("dark-theme");

    /**
     * 
     * @param value on selecting theme set theme variable globally
     */
    selectTheme(value: string) {
        this.theme.next(value);
    }
}