// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { FloralDivider } from './LotusPattern'

// export function PhotoGallery() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [autoPlay, setAutoPlay] = useState(true)

//   // Sample gallery images - in a real app, these would be wedding photos
//   const galleryImages = [
//     {
//       src: '/wedding-photo-1.jpg',
//       alt: 'Our Love Story',
//       caption: 'A moment of pure joy'
//     },
//     {
//       src: '/venue.jpg',
//       alt: 'The Venue',
//       caption: 'Where love blossoms'
//     },
//     {
//       src: '/wedding-photo-2.jpg',
//       alt: 'Reception Celebration',
//       caption: 'Dancing through the night'
//     }
//   ]

//   useEffect(() => {
//     if (!autoPlay) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [autoPlay, galleryImages.length])

//   const goToPrevious = () => {
//     setAutoPlay(false)
//     setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
//   }

//   const goToNext = () => {
//     setAutoPlay(false)
//     setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
//   }

//   const goToSlide = (index: number) => {
//     setAutoPlay(false)
//     setCurrentIndex(index)
//   }

//   return (
//     <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
//             Cherished Moments
//           </h2>
//           <FloralDivider />
//         </div>

//         {/* Gallery Container */}
//         <div className="relative group">
//           {/* Main Image */}
//           <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
//             <Image
//               src={galleryImages[currentIndex].src}
//               alt={galleryImages[currentIndex].alt}
//               fill
//               className="object-cover transition-opacity duration-500"
//               priority
//             />
            
//             {/* Gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

//             {/* Caption */}
//             <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
//               <p className="font-serif text-xl md:text-2xl">
//                 {galleryImages[currentIndex].caption}
//               </p>
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={goToPrevious}
//             className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-primary/50"
//             aria-label="Previous image"
//           >
//             <ChevronLeft size={24} />
//           </button>

//           <button
//             onClick={goToNext}
//             className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-primary/50"
//             aria-label="Next image"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         {/* Indicators */}
//         <div className="flex justify-center gap-2 mt-8">
//           {galleryImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-2 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
//                 index === currentIndex
//                   ? 'bg-primary w-8 md:w-10'
//                   : 'bg-primary/30 w-2 md:w-3 hover:bg-primary/60'
//               }`}
//               aria-label={`Go to image ${index + 1}`}
//               aria-current={index === currentIndex}
//             />
//           ))}
//         </div>

//         {/* Image counter */}
//         <p className="text-center mt-6 text-sm text-foreground/60">
//           {currentIndex + 1} / {galleryImages.length}
//         </p>

//         {/* Decorative footer */}
//         <FloralDivider className="mt-12" />
//       </div>
//     </section>
//   )
// }
