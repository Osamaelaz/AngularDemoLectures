import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutUs } from './Components/about-us/about-us';
import { Home } from './Components/home/home';
import { NotFound } from './Components/not-found/not-found';
import { Products } from './Components/products/products';
import { Vision } from './Components/about-us/vision/vision';
import { Values } from './Components/about-us/values/values';
import { Details } from './Components/details/details';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: Home },
  { path: 'Details/:id', component: Details },

  {
    path: 'AboutUs',
    component: AboutUs,
    children: [
      //   { path: '', component: Vision },// Default child route
      { path: '', redirectTo: 'Vision', pathMatch: 'full' }, // Redirect to Vision as default child route
      { path: 'Vision', component: Vision },
      { path: 'Values', component: Values },
      /*
        Diff here between pathmatch full and prefix:
        - pathmatch full: matches the entire URL, so it will only redirect if the URL is exactly 'AboutUs'.
        - pathmatch prefix: matches any URL that starts with 'AboutUs', so it would redirect for 'AboutUs', 'AboutUs/Vision', 'AboutUs/Values', etc., which is not what we want in this case.
      */
    ],
  },
  { path: 'Products', component: Products },
  { path: '**', component: NotFound }, // First match wins
];
