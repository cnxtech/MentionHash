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
import { ImageCenterCropDirective } from './image-center-crop/image-center-crop.directive';
import { TimepickerDirective } from './timepicker/timepicker.directive';
import { DatepickerDirective } from './timepicker/datepicker.directive';
import { DatepairDirective } from './timepicker/datepair/datepair.directive';
import { ContenteditableDirective } from './directives/contenteditable.directive';
import {LazyLoadDirective} from "./lazyload/lazy-load.directive";
import {SearchService} from "./services/search.service";
import {ImgCacheModule} from "ng-imgcache";
import {FileDropModule} from "ngx-file-drop";
import {ChartsModule} from "ng2-charts";

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
    PagerComponent,
    PaginationComponent,
    AutocompleteSearchDirective,
    HighlightPipe,
    TokenInputDirective,
    EventEmitterClickComponent,
    InputDebounceComponent,
    ImageCenterCropDirective,
    TimepickerDirective,
    DatepickerDirective,
    DatepairDirective,
    ContenteditableDirective,
    LazyLoadDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SwiperModule,
    RlTagInputModule,
    CarouselModule,
    ImgCacheModule,
    NguUtilityModule,
    FileDropModule,
    ChartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Sharedservice,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
