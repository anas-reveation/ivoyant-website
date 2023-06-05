export default function Map() {
  return (
    <div className="container-fluid p-0">
      <div className="map-container"
        // style={{
        //   backgroundImage: `linear-gradient(rgba(217, 217, 217, 0) 0%, rgb(0 0 0 / 26%) 0%, rgb(0 0 0 / 19%) 0.32%),url('./images/Home/map.svg')`,
        //   minHeight: '758px',
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
        
      >
       
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57080828.62159563!2d2.5246959469130097!3d29.166520042158684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158130171101%3A0x503aaedacd154bc3!2siVoyant%20Systems%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1684144817729!5m2!1sen!2sin" width="" height="" className="w-100 h-100"  allowFullScreen={true}loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
