import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AmazonDealsComponent } from 'src/app/amazon-deals/amazon-deals.component';
import { FlipkartDealsComponent } from 'src/app/flipkart-deals/flipkart-deals.component';

const route: Routes = [
    {path: '', component: HomeComponent},
    {path: 'flipkart-deals', component: FlipkartDealsComponent},
    {path: 'amazon-deals', component: AmazonDealsComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class AppRouting {

}
