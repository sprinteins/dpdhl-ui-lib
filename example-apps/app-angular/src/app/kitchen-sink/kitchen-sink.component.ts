import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-kitchen-sink',
    templateUrl: './kitchen-sink.component.html',
    styleUrls: ['./kitchen-sink.component.css']
})
export class KitchenSinkComponent {

    @Output() selectedPage: EventEmitter<any> = new EventEmitter();

    log = '';

    handleClick(buttonName: string){
        this.log = `clicked on ${buttonName}`
    }

    handleSelect(event: CustomEvent) {
        this.log = `switched to ${event.detail}`
    }

    menuItems = [
        { label: "Menu 1", click: () => { alert('You have selected "Menu 1"') }},
        { label: "Menu 2", click: () => { alert('You have selected "Menu 2"') }},
        { label: "Menu 3", click: () => { alert('You have selected "Menu 3"') }},
    ]

    tableTitle = "Table heading"
    tableFooter = "*Table footer annotation"
    tableRows = [
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
    ]
    tableHeaders = ["","Column title 1", "Column title 2"]

}
