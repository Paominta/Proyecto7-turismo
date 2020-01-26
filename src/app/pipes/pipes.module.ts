import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';
import { FiltroPipe } from './filtro.pipe';
import { FiltrocatPipe } from './filtrocat.pipe';

@NgModule({
  declarations: [
    DomSanitizerPipe,
    ImageSanitizerPipe,
    ImagenPipe, FiltroPipe, FiltrocatPipe],
  exports: [
    DomSanitizerPipe,
    ImageSanitizerPipe,
    ImagenPipe,
    FiltroPipe,
    FiltrocatPipe
  ]
})
export class PipesModule { }
