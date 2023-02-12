import Image from 'next/image'

const ImageComponent = ({ className = '', alt = '', src = '', objectFit = 'cover' }) => {
  return (
    <div className={`${className} imageWrapper`}>
      <Image src={src} fill alt={alt} style={{ objectFit: 'cover', objectPosition: 'top' }} />
    </div>
  )
}

export default ImageComponent
