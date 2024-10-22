export interface IProduct {
  title?: string
  price?: string
  photo?: string
  name?: string
  code?: string
  dropdownParams?: {
    title?: string
    selectItems?: string[]
  }
  params?: {
    title?: string
    selectItems?: string[]
  }[]
}
