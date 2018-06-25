import { Component, OnInit, Input } from "@angular/core";
import { Ticket } from "../state";

@Component({
    selector: 'app-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
    @Input()
    id: number;
    @Input()
    name: string;
    @Input()
    tickets: Ticket[];

    ngOnInit() {}
}
