import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {
    tableHeaders: { key: string, label: string }[] = []
    classNames = ''
    @Input() data: { [key: string]: any }[] = []
    @Input() set tableConfig(conf: {
        dataFields: string[],
        headers: string[],
        classNames: string
    }) {
        if (conf.classNames) this.classNames = conf.classNames
        if (conf.dataFields.length) {
            this.tableHeaders = conf.dataFields
                .filter(field => this.data[0].hasOwnProperty(field))
                .map(field => {
                        let label = field[0].toUpperCase() + field.slice(1)
                        const index = conf.dataFields.indexOf(field)
                        if (conf.headers && conf.headers[index] !== undefined) {
                            label = conf.headers[index]
                        }
                        return { key: field, label: label }
                    }
                )
        }
    }
}
