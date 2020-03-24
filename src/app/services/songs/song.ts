export interface Song {
  platform: string,
  id: string,
  title: string,
  artist: string,
  artistLink: string,
  album: string,
  albumLink: string,
  isrc: string,
  duration: string,
  trackLink: string,
  preview?: string,
  picture: string,
  addedDate: number,
  position: string,
  shareUrls: Array<any>
}