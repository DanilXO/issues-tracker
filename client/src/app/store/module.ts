import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { createLogger } from 'redux-logger';
import { environment} from "../../environments/environment";
import { ApplicationState } from './state';
import { rootReducer } from './reducers';
import { RootEpics } from './epics';
import { Middleware } from "redux";

@NgModule({
    imports: [NgReduxModule],
    providers: [RootEpics],
})
export class StoreModule {
    constructor(
        public store: NgRedux<ApplicationState>,
        devTools: DevToolsExtension,
        rootEpics: RootEpics,
    ) {
        let middleware: Middleware[] = [];
        if (environment.production) {
            middleware.push(createLogger());
        }
        middleware.push(...rootEpics.createEpics());
        store.configureStore(
            rootReducer,
            {},
            middleware,
            devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
}