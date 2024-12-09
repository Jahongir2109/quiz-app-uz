import { NgModule } from "@angular/core";
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppLayoutModule } from "./layout/app.layout.module";
import { NotfoundComponent } from "./demo/components/notfound/notfound.component";
import { ProductService } from "./demo/service/product.service";
import { CountryService } from "./demo/service/country.service";
import { CustomerService } from "./demo/service/customer.service";
import { EventService } from "./demo/service/event.service";
import { IconService } from "./demo/service/icon.service";
import { NodeService } from "./demo/service/node.service";
import { PhotoService } from "./demo/service/photo.service";
import { AuthGuard } from "./demo/service/auth-guard.service";
import { AuthService } from "./demo/service";
import { RouterModule } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { MessageService } from "primeng/api";
export function translateFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}
@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    CountryService,
    MessageService,
    CustomerService,
    EventService,
    IconService,
    NodeService,
    PhotoService,
    ProductService,
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
