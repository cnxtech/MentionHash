import {
  Compiler,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  ModuleWithComponentFactories,
  NgModule,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

import {CommonModule} from "@angular/common";

@Component({
  selector: 'runtime-content',
  template: '<div style="text-align: justify" #container></div>'
})
export class RuntimeContentComponent implements OnInit {

  // `<div #container></div>`

  @Input() template: string;

  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private compiler: Compiler) {
  }

  ngOnInit() {
    console.log('Template', this.template);
    this.compileTemplate();
  }

  returnLength(abc): number {
    return abc.length ? 50 : 150;
  }

  compileTemplate() {

    let metadata = {
      selector: `runtime-component-sample`,
      template: this.template
    };

    let factory = this.createComponentFactorySync(this.compiler, metadata, null);

    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);

    this.componentRef.changeDetectorRef.detectChanges();
  }

  private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
    const cmpClass = componentClass || class RuntimeComponent {
        name: string = '';

        getUserId(id) {
          console.log(id);
          console.log('id');
        }

      };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({imports: [CommonModule], declarations: [decoratedCmp]})
    class RuntimeComponentModule {
    }

    let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }

}
