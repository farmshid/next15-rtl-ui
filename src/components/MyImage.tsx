import { Image,ImageKitProvider } from "@imagekit/next";


interface ImageProps{
w:number,
h:number,
alt:string,
path:string,
className?:string,
tr?:boolean
}

export default function MyImage({ w, h, alt, path, className,tr }: ImageProps) {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT;
  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <Image src={path} {...(tr?{transformation:[{width:`${w}`,height:`${h}`}]}:{width:w ,height:h})}  alt={alt} className={className} />
    </ImageKitProvider>
  );
}