import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Board } from "./state";
import { NgRedux, select } from "@angular-redux/store";
import { ApplicationState } from "../store/state";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/index";
import { BoardActions } from "./actions";

@Component({
    selector: "app-board",
    templateUrl: "./board.component.html",
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    @select(['activeBoardState', 'board'])
    private boardObservable: Observable<Board>;
    board: Board;

    constructor(private ngRedux: NgRedux<ApplicationState>,
                private route: ActivatedRoute,
                private ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
        this.ngRedux.dispatch(BoardActions.loadABoardById(id));
        this.boardObservable.subscribe((board) => {
            this.board = board;
            this.ref.detectChanges();
        })
    }
}
