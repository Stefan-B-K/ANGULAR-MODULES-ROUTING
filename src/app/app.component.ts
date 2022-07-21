import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Pages } from "./Pages";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showNotFound = false
    showRoute = false
    routes = Pages

    constructor (private router: Router) {
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                if (Object.values<string>(Pages).includes(e.url.slice(1))) {
                    this.showRoute = true
                    this.showNotFound = false
                } else {
                    this.showNotFound = true
                    this.showRoute = false
                }
            }
        });
    }

    get showHome () {
        if (this.router.url === '/') {
            this.showRoute = false
            this.showNotFound = false
            return true
        }
        return false
    }

}
