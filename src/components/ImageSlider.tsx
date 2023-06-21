import { Zoom } from 'react-slideshow-image';
import { imageUrl } from "../utils/callApi";
import 'react-slideshow-image/dist/styles.css'
export const ImageSlider = (props: any) => {
    const { images } = props
    console.log({ images })
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '500px',
        borderRadius: '20px',
        width: '100%'
    }

    const indicatorsStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '100px',
        borderRadius: '5px',
        width: '100px',
        marginRight: '10px'
    }
    const indicators = (index: any) => (<img className='indicators' style={{ ...indicatorsStyle }} src={`${imageUrl + images[index].file_key}`} alt='Property'></img>);
    return (
        <Zoom autoplay={false} indicators={indicators} scale={1.4}>
            {images?.map((image: any, index: number) => {
                return (
                    <div className="each-slide-effect" key={`image-${index}`} >
                        <img style={{ ...divStyle }} src={`${imageUrl + image.file_key}`} alt='Property'></img>
                    </div>

                )
            })}
        </Zoom >
    );
}