import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors:{
      namepage2: string,
      namepage: string,
      backgroundicone : string,
      background : string,
      text: string,
      icon: string,
      textInfo: string,
      subTitle:string,
      backgroundperfil: string,
      about: string,
    },
  }
}