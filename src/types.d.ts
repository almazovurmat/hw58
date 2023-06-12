export interface IBtnModel {
    type: string;
    label: string;
}

export interface IAlertData {
    type: string;
    text: string;
    onDismiss?: (number:number) => void;
    clickDismissable: boolean;
}