
import {sanityClient } from  "../sanity"
import imageurlBuilder from "@sanity/image-url"

const builder = imageurlBuilder(sanityClient)

function urlFor(source:any){
    return builder.image(source)

}

export default urlFor;
