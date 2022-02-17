import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const observerOptions ={
	root: null,
	rootMargin: '0px',
	threshold: 0.5
}

const countryColors = {
    default: 'rgb(17, 24, 39)',
    'Japão': 'rgb(188, 0, 45)',
    'Reino_Unido' : 'rgb(1, 33, 105)',
    'Índia' : '#FF9933',
    'Alemanha': '#FFCE00'
}


const imgs = {
    'Japão' : ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png",
    "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Japan.jpg?h=fcdfd899&itok=YWWi9dFQ",
    "https://media.timeout.com/images/105240237/image.jpg",
    "https://media.cntraveler.com/photos/58d2c0a97e623821b9f3181d/16:9/w_2048,h_1152,c_limit/yoshinoyama--japan-GettyImages-488852217.jpg"
    ],

    'Reino_Unido' : ["https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/bandeira-do-reino-unido.jpg",
    "https://live.staticflickr.com/3174/2363418491_f61429e604_c.jpg",
    "https://inglaterrabrasil.com.br/files/2017/11/brighton-beach-xlarge.jpg",
    "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/01/09ET/britains-top-castles-windsor-bershire-england.jpg.rend.hgtvcom.1280.960.suffix/1491581062554.jpeg"
    ],

    'Índia' : [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png",
        "https://blog.mundi.com.br/wp-content/uploads/sites/98/2015/10/entrada-do-taj-mahal-810x506.png",
        "https://ci-prod.imgix.net/upload/galeriadeimagens/00210010.jpg",
        "https://www.india.gov.in/sites/upload_files/npi/files/india-glance2.jpg"
    ],
    'Alemanha' : [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png',
        'https://www.mawista.com/wp-content/uploads/2019/11/warum-studieren-in-deutschland-den-lebenslauf-aufpeppt.jpg',
        'https://media.istockphoto.com/photos/historic-town-of-rothenburg-ob-der-tauber-franconia-bavaria-germany-picture-id619638736?b=1&k=20&m=619638736&s=170667a&w=0&h=tbR-ohKQ_csdnpMmKiqh3yQJHBURXYOU9kliWXTgDGU=',
        'https://media.cntraveler.com/photos/59bb6a936749de2350ad8afb/3:2/w_2045,h_1363,c_limit/Neuschwanstein-Castle-GettyImages-458413087.jpg'
    ]
}

const texts = {
    'Japão': "A terra do sol nascente sempre me despertou minha curiosidade com suas grandes metrópoles e aparência futurista",
    'Reino_Unido' : "Felizmente, já tive a oportunidade de viver dois meses no Reino Unido. Me apaixonei pela experiência e pelo país e pretendo retornar para conhecê-lo ainda mais",
    'Índia' : "É difícil dizer o que é mais fascinante sobre a Índia: as pulsantes cidades, o emaranhado de religiões e culturas diversas ou a exótica gastronomia",
    'Alemanha' : "A Alemanha possui uma história rica e a arquitetura mais bela que já vi (pela tela do computador, infelizmente), presente em todos os lugares: das pequenas vilas às grandes cidades."
}

function generateImages(country){
    return imgs[country].map((imgSrc, index) => (
        <div className="h-48 overflow-hidden border-2 border-white" key={`slider${index}`}>
            <img src={imgSrc} alt="" className="h-full min-w-full " />
        </div>
    ))
}

function filterUnderscores(string){
    return string.replace(/_/g, " ")
}


export default function Country(props){

    
    function changeBackgroundColor(){
        document.querySelector(':root').style.setProperty('--main-color', countryColors[props.name])
    }
    

    const observerRef = useRef(new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
            changeBackgroundColor()
        } 
    }, observerOptions))

    useEffect(() => {
        observerRef.current.observe(document.querySelector(`[countryname=${props.name}]`))
    }, [])


    return (
        <div className="w-full flex justify-center">
            <div className="w-72 border-4 border-white my-24 rounded-md overflow-hidden flex flex-col relative bg-gree" countryname={props.name}>
                <Carousel showThumbs={false} showStatus={false} axis="horizontal" showArrows={true} dynamicHeight={false}>
                    {generateImages(props.name)}
                </Carousel>
                <div className="h-60 p-4 box-border">
                    <h1 className="text-2xl font-extrabold mb-3">{filterUnderscores(props.name)}</h1>
                    {texts[props.name]}
                </div>
            </div>
        </div>
    )
}