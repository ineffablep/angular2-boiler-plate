export class FilterKeyValue {
    key: string;
    value: string;
}
export class FilterModel {
    keyValues: FilterKeyValue[] = [];
    orCondition: boolean = false;
    serversideFiltering: boolean = false;
    serversideUrl?: string;
}
