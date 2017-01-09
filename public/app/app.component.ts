import { IComponentOptions, IController } from 'angular';

export class AppComponentController implements IController { }

export const AppComponent: IComponentOptions = {
    template: require('./app.html'),
    controller: AppComponentController
};