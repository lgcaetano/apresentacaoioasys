import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { colors } from "react-select/src/theme";

const observerOptions ={
	root: null,
	rootMargin: '0px',
	threshold: 0.5
}

const countryColors = {
    'Japão': 'rgb(188, 0, 45)'
}


const imgs = {
    'Japão' : ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png",
    "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Japan.jpg?h=fcdfd899&itok=YWWi9dFQ",
    "https://media.timeout.com/images/105240237/image.jpg",
    "https://media.cntraveler.com/photos/58d2c0a97e623821b9f3181d/16:9/w_2048,h_1152,c_limit/yoshinoyama--japan-GettyImages-488852217.jpg"
]
}

function generateImages(country){
    return imgs[country].map((imgSrc, index) => (
        <div className="h-48 overflow-hidden" key={`slider${index}`}>
            <img src={imgSrc} alt="" className="h-full min-w-full" />
        </div>
    ))
}


export default function Country(props){

    function changeBackgroundColor(){
        document.querySelector(':root').getElementsByClassName.setProperty('--main-color', colors[props.name])
    }



    return (
        <div className="w-full flex justify-center">
            <div className="w-72 border-4 border-white my-24 rounded-md overflow-hidden flex flex-col relative">
                <Carousel showThumbs={false} showStatus={false} axis="horizontal" showArrows={true} dynamicHeight={false}>
                    {generateImages(props.name)}
                </Carousel>
                <div className="h-60 p-4 box-border">
                    <h1 className="text-lg font-bold">{props.name}</h1>
                </div>
            </div>
        </div>
    )
}