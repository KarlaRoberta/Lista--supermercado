export interface Product{
  id?: number
  quantidade?: number
  nome: string
}

export const EXAMPLE_DATA: Product[] = [
  {id: 1, nome: 'Hydrogen', quantidade: 3},
  {id: 2, nome: 'Helium', quantidade: 2},
  {id: 3, nome: 'Lithium', quantidade: 9},

];
