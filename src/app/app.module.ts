import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { ContentComponent } from './components/content/content.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ChatBubbleComponent } from "./components/chat-bubble/chat-bubble.component";
import { ChangeStyleDirective } from './directives/change-style.directive';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DevopsComponent } from './components/devops/devops.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        PageComponent,
        ContentComponent,
        ChatBubbleComponent,
        ChangeStyleDirective,
        TechnologiesComponent,
        CollapseComponent,
        DevopsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgbModule
    ]
})
export class AppModule { }

