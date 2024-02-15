import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FileReadService } from './servisi/file-read.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangComponent } from './hang/hang.component';
import { FileDisplayComponent } from './file-display/file-display.component';
@NgModule({
  declarations: [
    AppComponent,
    HangComponent,
    FileDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FileReadService],
  bootstrap: [AppComponent,FileDisplayComponent]
})
export class AppModule { }
