import { Component } from '@angular/core';

@Component({
    selector: 'app-collections-home',
    templateUrl: './collections-home.component.html',
    styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
    tableData = [
        { name: 'Stefan', age: 47, job: 'Developer', email: 'stef@stef', tel: '555-121212' },
        { name: 'Emil', age: 28, job: 'Designer', email: 'emil@emil', tel: '555-343434' },
        { name: 'Ivana', age: 56, job: 'Singer', email: 'ivana@ivana', tel: '555-454545' },
        { name: 'Elena', age: 22, job: 'Dancer', email: 'elena@elena', tel: '555-787878' },
    ]

    tableConfig = {
        dataFields: ['name', 'job', 'age'],
        headers: ['First Name'],
        classNames: 'striped celled',
    }

}
