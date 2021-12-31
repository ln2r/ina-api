export interface NodeInterface {
  id: number,
  name: string,
  cp: number,
  zone: string,
  manager: string,
  workload: number,
  investment: {
    interest: number,
    type: string,
  },
  main: string,
  sub: [],
  weather: {
    temperature: number, 
    humidity: number,
    water: number,
  },
  products: []
}[]