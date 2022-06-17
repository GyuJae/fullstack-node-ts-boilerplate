interface IPathToUrl {
  path: string
  variant?: 'avatar' | 'public'
}

export const pathToUrl = ({ path, variant = 'avatar' }: IPathToUrl): string =>
  `https://imagedelivery.net/ZYLViq3IecpAakTgPse5sg/${path}/${variant}`
