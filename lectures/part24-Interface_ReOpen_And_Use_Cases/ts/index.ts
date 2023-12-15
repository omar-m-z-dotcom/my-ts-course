/*
  Interface
  - ReOpen The Interface And Use Cases
*/

// Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
// re-open the interface
// not extending the interface
interface Settings {
  sidebar: boolean;
}

// Contact Page
// re-open the interface
// not extending the interface
interface Settings {
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}