export interface INavigationModel {
    brand: string;
    brandLogoPath?: string;
    links?: IRouteLinkModel[];
    cssClass?: string;
    style?: string;
    showBothBrandAndLogo: boolean;

}

export interface IRouteLinkModel {
    routerLink: string;
    displayName: string;
    cssClass?: string;
    style?: string;
    icon?: string;
    showBothIconText: boolean;
    requireLogin: boolean;
    dropdownLinks?: IRouteLinkModel[];
}

export class NavigationModel implements INavigationModel {
    public links: IRouteLinkModel[];
    public showBothBrandAndLogo: boolean= false;
    constructor(public brand: string) {
        this.links = [];
    }
}

export class RouteLinkModel implements IRouteLinkModel {
    public dropdownLinks?: IRouteLinkModel[];
    public showBothIconText: boolean = false;
    public requireLogin: boolean = false;
    constructor(public routerLink: string,
                public displayName: string,
                public icon?: string,
                public cssClass?: string) {
        this.dropdownLinks = [];
    }
}