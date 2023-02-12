import Image from 'next/image'

const ImageComponent = ({ className = '', alt = '', src = '', objectFit = 'cover', objectPosition = 'top' }) => {
  return (
    <div className={`${className} imageWrapper`}>
      <Image src={src} fill alt={alt} style={{ objectFit, objectPosition }} />
    </div>
  )
}

export default ImageComponent
