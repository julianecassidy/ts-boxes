export interface IBox {
    id: string;
    width: number | string;
    height: number | string;
    backgroundColor: string;
};

export interface IBoxRemove extends IBox {
    remove: Function
};

export interface IFormData {
    height: string;
    width: string;
    backgroundColor: string
};  

export interface INewBoxForm {
    createBox: (arg0: IBox) => void
  };