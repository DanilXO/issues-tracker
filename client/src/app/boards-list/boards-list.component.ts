import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {ApplicationState} from "../store/state";
import {BoardListAction} from "./context/actions";
import {BoardActions} from "../board/actions";
import {Observable, Subscription} from "rxjs";
import {BoardListState} from "./context/state";
import { User } from "../login/model";
import {Router} from "@angular/router";
import {ActiveBoardState, Board} from "../board/state";

@Component({
    selector: 'app-boards-list',
    templateUrl: './boards-list.component.html',
    styleUrls: ['./boards-list.component.css']
})
export class BoardsListComponent implements OnInit {
    @select(['boardListState', 'boards'])
    boardListObservable: Observable<BoardListState>;


    private boardSubscribe: Subscription;

    constructor(private ngRedux: NgRedux<ApplicationState>,
                private router: Router) { }

    public clickOnBoardChange(idBoard: number) {
        this.router.navigateByUrl(`ui/board/${idBoard}`)
    }

    ngOnInit() {
        let user: User = this.ngRedux.getState().contextState.user;
        if (!user) {
            return;
        }
        this.ngRedux.dispatch(BoardListAction.loadUserBoards(user.id));

    }

}
