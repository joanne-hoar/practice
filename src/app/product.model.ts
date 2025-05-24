/**
 *   provides data structure to be used in products home and cart
*/
export interface ProductDetails {
  id?: string;         // Optional, if you want to include the GUID
  name: string;
  image: string;
  description: string;
  category: string;
}