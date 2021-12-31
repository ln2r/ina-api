export interface BossInterface {
  name: string,
  location: string,
  tips: [string],
  image: string,
  guide: string,
  time: {
    monday: [string],
    tuesday: [string],
    wednesday: [string],
    thursday: [string],
    friday: [string],
    saturday: [string],
    sunday: [string],
  }
}[]