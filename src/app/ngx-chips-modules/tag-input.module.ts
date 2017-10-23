import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import {TagInputComponent} from "./components/tag-input/tag-input";
import {DeleteIconComponent} from "./components/icon/icon";
import {TagInputForm} from "./components/tag-input-form/tag-input-form.component";
import {TagComponent} from "./components/tag/tag.component";
import {HighlightPipe} from "./core/pipes/highlight.pipe";
import {TagInputDropdown} from "./components/dropdown/tag-input-dropdown.component";
import {TagRipple} from "./components/tag/tag-ripple.component";
import {Options, OptionsProvider} from "./core/providers/options-provider";
import {DragProvider} from "./core/providers/drag-provider";

const COMPONENTS = [
    TagInputComponent,
    DeleteIconComponent,
    TagInputForm,
    TagComponent,
    HighlightPipe,
    TagInputDropdown,
    TagRipple
];

const optionsProvider = new OptionsProvider();

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2DropdownModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [
        DragProvider
    ]
})
export class TagInputModule {
    /**
     * @name withDefaults
     * @param options {Options}
     */
    public static withDefaults(options: Options): void {
        optionsProvider.setOptions(options);
    }
}
