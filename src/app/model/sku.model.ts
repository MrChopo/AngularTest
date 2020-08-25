
export interface Parent {
  id?: number;
  name: string;
}

export interface Sku {
  id: number;
  lastChange: string;
  name: string;
  price: number;
  parent: Parent;
  checked?: boolean;
  inCart?: boolean;
}
