import { element, IComponentOptions, IScope, IController, mock } from 'angular';

export class ComponentFixture {

    private markup: string;
    private scope: IScope;
    private componentElement: JQuery;

    constructor(markup: string) {
        this.markup = markup;
    }

    public initialize() {
        return mock.inject(($rootScope, $compile) => {
            this.scope = $rootScope.$new();
            this.componentElement = element(this.markup);
            this.componentElement = $compile(this.componentElement)(this.scope);
        });
    }

    protected setBinding(binding: string, value: any) {
        this.scope[binding] = value;
        this.scope.$apply();
    }

    protected getBinding(binding: string) {
        return this.scope[binding];
    }

    protected elementText(id: string): string {
        return this.element(id).text();
    }

    protected clickElement(id: string) {
        this.element(id).triggerHandler('click');
    }

    protected clickChild(cssClass: string, index: number) {
        this.elementByClass(cssClass).get(index).click();
    }

    protected hoverElement(id: string) {
        this.element(id).triggerHandler('mouseenter');
    }

    protected unhoverElement(id: string) {
        this.element(id).triggerHandler('mouseleave');
    }

    protected element(id: string): JQuery {
        return this.componentElement.find('#' + id);
    }

    protected elementByClass(cssClass: string): JQuery {
        return this.componentElement.find('.' + cssClass);
    }

    protected childComponent(id: string, controllerName: string): IController {
        return this.element(id).controller(controllerName);
    }
 }