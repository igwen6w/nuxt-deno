declare namespace T {
  class Map {
    constructor(container: string, options: { projection: string })
    centerAndZoom(lnglat: LngLat, zoom: number): void
    addControl(control: Control): void
    addOverLay(marker: Marker): void
  }

  class LngLat {
    constructor(lng: number, lat: number)
  }

  class Control {
    static Zoom: new () => Control
    static Scale: new () => Control
  }

  class Marker {
    constructor(lnglat: LngLat)
  }
}
