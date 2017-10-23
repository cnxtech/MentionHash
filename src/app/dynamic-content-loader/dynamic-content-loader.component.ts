import {Compiler, Component, Input, NgModule, NgModuleFactory, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-dynamic-content-loader',
  template: '<ng-container *ngComponentOutlet="dynamicComponent;ngModuleFactory: dynamicModule;"></ng-container>'
})
export class DynamicContentLoaderComponent implements OnInit {

  dynamicComponent;
  dynamicModule: NgModuleFactory<any>;

  @Input() text: string;

  @Output() textOutput: string;

  constructor(private compiler: Compiler) {
  }

  ngOnInit() {
    this.dynamicComponent = this.createNewComponent(this.text);
    this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
  }

  protected createComponentModule(componentType: any) {
    @NgModule({
      imports: [],
      declarations: [
        componentType
      ],
      entryComponents: [componentType]
    })
    class RuntimeComponentModule {
    }
    // a module for just this Type
    return RuntimeComponentModule;
  }

  protected createNewComponent(text: string) {
    let template = text;

    @Component({
      selector: 'dynamic-component',
      template: template
    })
    class DynamicComponent implements OnInit {
      text: any;

      ngOnInit() {
        this.text = text;
        console.log(this.text);
      }

      getUserId(id) {
        console.log(id);
        console.log('id');
      }
    }
    return DynamicComponent;
  }
}
