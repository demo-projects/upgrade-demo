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
1. Create new service in your `AngularJS` app (`logger.js`)
2. The `upgradeModule` expose an `$injector` service to get `AngularJS` services
3. create a new service in your `Angular` app (`storage.service.ts`)
4. register it to your `AngularJS` with `downgradeInjectable` function  


`checkout 02_dependcy_injection`

 



