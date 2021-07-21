export default interface Slideshow {
    name: string;
    id: string;
    creator: string;
    date: object;
    currentSlide:number;
    numSlides: number;
}


export  interface CreateSlideshow {
    name: string;
    creator: string;
    date: object;
    currentSlide:number;
    numSlides: number;
}
