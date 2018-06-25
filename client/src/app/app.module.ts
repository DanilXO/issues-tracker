import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderModule } from "./header/header.module";
import { NgReduxModule } from "@angular-redux/store";
import { StoreModule } from "./store/module";
import { BoardModule } from "./board/board.module";
import { AlertModule, ModalModule } from "ngx-bootstrap";
import { DndModule } from "ng2-dnd";
import { LoginModule } from "./login/login.module";
import { BoardsListComponent } from "./boards-list/boards-list.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { RouterModule, Routes } from "@angular/router";
import { BoardComponent } from "./board/board.component";
import { BoardListModule } from "./boards-list/boards-list.module";
import { CreateTicketModule } from "./create-ticket/create-ticket.module";
import { CreateColumnModule } from "./create-column/create-column.module";
import { CreateBoardModule } from "./create-board/create-board.module";
import { TicketDetailComponent } from "./board/ticket-detail/ticket-detail.component";
import { TicketDetailModule } from "./board/ticket-detail/ticket-detail.module";

const appRoutes: Routes = [
    {path: "", component: HomePageComponent},
    {path: "ui", component: HomePageComponent},
    {path: "ui/board/:id", component: BoardComponent},
    {path: "ui/boards", component: BoardsListComponent},
    {path: "ui/ticket/:id", component: TicketDetailComponent}

];

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent
    ],
    imports: [
        HttpClientModule, BrowserModule,
        HeaderModule, LoginModule, CreateBoardModule, CreateColumnModule, CreateTicketModule, BoardModule, BoardListModule, TicketDetailModule,
        NgReduxModule, StoreModule,
        RouterModule.forRoot(appRoutes),
        AlertModule.forRoot(), ModalModule.forRoot(), DndModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
