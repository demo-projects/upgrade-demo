# Angular Upgrade Demo

Clone this repo, cd into `angular-phonecat` and run `npm install`.
cd into `new-phonecat` and run `npm install`.

To launch the new Angular project run `npm start` (from the `new-phonecat` directory)

## Migration - Step by Step

###  Init
1. Generate new Angular project using the angular-cli
2. Put both the 'old' AngularjS project, and the new Angular project under the same directory.

`checkout master`

### Bootstrap
1. Install all the required dependency in the new project
2. load the global `angularjs` scripts (`.angular-cli.json / scripts`) 
3. Copy all the css files to your new `assets` folder, and import them to your `style.css`
4. Copy all the javascript files into the new project under `src`
5. install @angular/upgrade (`npm i @angular/upgrade`)
6. import `UpgradeModule` to your `AppModule`
7. bootstrap the `angularjs`module in your `AppComponent` init hook
8. Move global files files to assets folder as needed

`checkout 01_bootstrap`

### Dependency Injection

##### AngularJS in Angular 
1. Create new service in your `AngularJS` app (`logger.js`)
2. The `upgradeModule` expose an `$injector` service to get `AngularJS` services

##### Angular in AngularJS
1. create a new service in your `Angular` app (`storage.service.ts`)
2. register it to your `AngularJS` with `downgradeInjectable` function  

`checkout 02_dependcy_injection`

### Component integration

##### Angular in AngularJS
1. create new `Angular` component.
2. add it to your module: `entryComponent` array
3. register it as a directive using `downgradeComponent`  
4. use it in your `AngularJS` templates

##### AngularJS in Angular
1. create an `AngularJS` component
2. add it your `AngularJS` module
3. create an Angular directive that extends `UpgradeComponent`
4. use an `element` selector with `kabbab-case`
5. use it inside your `Angular` components templates

`checkout 03_component_integration`

### Summary
Upgrading an existing AngularJS to Angular is easy
with the `UpgradeModule`.

Look at the code comments for descriptions.

`checkout 04_summary_comments`
