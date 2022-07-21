import { Component } from '@angular/core';

@Component({
    selector: 'app-views-home',
    templateUrl: './views-home.component.html',
    styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent  {
    stats = [
        { value: 22, label: 'Users' },
        { value: 900, label: 'Revenue' },
        { value: 51, label: 'Reviews' },
    ]

    items = [
        {
            image: '/assets/images/couch.jpeg',
            title: 'Couch',
            description: "A comfy puffy couch to sit and lie and fall asleep on"
        },
        {
            image: '/assets/images/dresser.jpeg',
            title: 'Dresser',
            description: "This dresser can store all of your numerous dressings and dresses"
        }
    ]

}
