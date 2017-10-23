import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, forwardRef, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {ContenteditableModel} from "./contenteditable-model.directive";
import { MentionuserdataDirective } from './mentionuserdata.directive';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import {DynamicContentLoaderComponent} from "./dynamic-content-loader/dynamic-content-loader.component";
import {ReadMoreComponent} from "./read-more/read-more.component";
import { ReadMoreDynamicDirective } from './read-more-dynamic.directive';
import { MyInhertLinkDirective } from './my-inhert-link.directive';
import {MentionHashtagComponent} from "./mention-hashtag/mention-hashtag.component";
import {MentionDirective} from "./mention.directive";
import { MarkDirective } from './mark/mark.directive';
import {Sharedservice} from "./mark/sharedservice.service";
import {PagerComponent} from "./pager/pager.component";
import {PaginationComponent} from "./pagination/pagination.component";
import {SwiperModule} from "angular2-useful-swiper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AutocompleteSearchDirective } from './autocomplete-search.directive';
import {HttpModule} from "@angular/http";
import {RlTagInputModule} from "angular2-tag-input/dist";
import {CarouselModule} from "./carousel/carousel.module";
import { HighlightPipe } from './highlight.pipe';
import { TokenInputDirective } from './token-input.directive';
import { NguUtilityModule } from 'ngu-utility/ngu-utility.module';
import {EventEmitterClickComponent} from "./event-emitter-click-component/event-emitter-click-component.component";
import {RuntimeContentComponent} from "./dynamic-content-loader/runtime-content.component";
import {InputDebounceComponent} from "./input-debounce/input-debounce.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ContenteditableModel,
    RuntimeContentComponent,
    MentionHashtagComponent,
    MentionuserdataDirective,
    SanitizeHtmlPipe,
    DynamicContentLoaderComponent,
    ReadMoreComponent,
    ReadMoreDynamicDirective,
    MentionDirective,
    MyInhertLinkDirective,
    MarkDirective,
    PagerComponent,
    PaginationComponent,
    AutocompleteSearchDirective,
    HighlightPipe,
    TokenInputDirective,
    EventEmitterClickComponent,
    InputDebounceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SwiperModule,
    RlTagInputModule,
    CarouselModule,
    NguUtilityModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Sharedservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
