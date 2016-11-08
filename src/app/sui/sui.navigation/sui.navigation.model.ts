export interface INavigationModel {
    brand:string;
    brandLogoPath?:string;
    links?:IRouteLinkModel[];
    cssClass?:string;
    style?:string;

}

export interface IRouteLinkModel {
    routerLink:string;
    displayName:string;
    cssClass?:string;
    style?:string;
    icon?:string;
    showBothIconText:boolean;
    requireLogin:boolean;
    dropdownLinks?:IRouteLinkModel[];
}

export class NavigationModel implements INavigationModel{
    public links:IRouteLinkModel[];
    constructor (public brand:string, public brandLogoPath?:string, public cssClass?:string, public style?:string){
        this.links= [];
    }
}

export class RouteLinkModel implements IRouteLinkModel{
    public dropdownLinks?:IRouteLinkModel[];
    constructor (public routerLink:string, public displayName:string, public requireLogin:boolean=false,public cssClass?:string,public style?:string ,public icon?:string, public showBothIconText:boolean=false){
        this.dropdownLinks=[];
    }
}