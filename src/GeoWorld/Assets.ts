
interface ITextures {
  name: string
  url: string
}

export interface IResources {
  textures?: ITextures[],
}

const filePath = '../static/images/'
const fileSuffix = [
  'wave'
]

const textures = fileSuffix.map(item => {
  return {
    name: item,
    url: filePath + item + '.png'
  }
})

const resources: IResources = {
  textures
}

export {
  resources
}