import type { Image } from '$lib/types'

export const load = ({ params }): { image: Image } => {
    const image = params.image

    return {
        image: {
            title: '',
            id: image,
            url: `https://api.img.sean.app/${image}`
        }
    }
}