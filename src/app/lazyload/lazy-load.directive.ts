import {
  Directive,
  OnInit,
  HostBinding,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  Renderer2,
  OnDestroy,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { inViewport } from './../lazyload/lazy-load.utils';

@Directive({
  selector: 'img[lazy-load]',
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @HostBinding('src') @Input() src: string = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

  @HostBinding('style.background-image') backgroundImage: string;
  @HostBinding('style.background-position') backgroundPosition: string;
  @HostBinding('style.background-size') backgroundSize: string;

  @Input('lazy-load') lazySrc: string;

  @Input('bg-src') bgSrc: string;

  private _threshold: number = 0;

  @Input()
  set threshold(position: number) {
    this._threshold = parseInt(this.threshold + '');
  };

  get thresold(): number {
    return this._threshold;
  }

  @Input() container: HTMLElement | Window;

  scrollUnload: () => void;
  resizeUnload: () => void;

  @Output() isLoading: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: string
  ) {
  }

  ngOnInit() {
    this.initBgSrc();

    this.initEvents();
  }

  ngAfterContentInit() {
    this.tryLoading();
  }

  ngOnDestroy() {
    this.unloadListeners();
  }

  initBgSrc() {
    if (this.bgSrc) {
      this.backgroundImage = 'url(' + this.bgSrc + ')';

      this.backgroundPosition = 'center center';

      this.backgroundSize = 'cover';
    }
  }

  initEvents() {
    this.scrollUnload = this.renderer.listen('window', 'scroll', () => {
      this.tryLoading();
    });

    this.resizeUnload = this.renderer.listen('window', 'resize', () => {
      this.tryLoading();
    });
  }

  tryLoading() {
    if (!isPlatformBrowser(this.platformId)) {
      //this.isLoading.emit(false);
      return;
    }

    if (inViewport(this.elementRef.nativeElement, {threshold: this.threshold, container: this.container})) {
      this.load();

      this.unloadListeners();
    } else {
      //this.isLoading.emit(false);
    }
  }

  load() {
    if (this.bgSrc) {
      this.src = this.lazySrc;
      this.isLoading.emit(false);
    } else {
      let img: HTMLImageElement = this.renderer.createElement('img');

      img.onload = () => {
        this.src = this.lazySrc;
      };

      img.src = this.lazySrc;
      this.isLoading.emit(false);
    }
  }

  unloadListeners() {
    this.scrollUnload && this.scrollUnload();
    this.resizeUnload && this.resizeUnload();
  }
}
