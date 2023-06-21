import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { getImageUrl } from '../utils/common';
export const ImageSlider = (props: any) => {
    const { images } = props
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
    const indicators = (index: any) => (<img className='indicators' style={{ ...indicatorsStyle }} src={getImageUrl(images[index].file_url)} alt='Property'></img>);
    return (
        <Zoom autoplay={false} indicators={indicators} scale={1.4}>
            {images?.map((image: any, index: number) => {
                return (
                    <div className="each-slide-effect" key={`image-${index}`} >
                        <img style={{ ...divStyle }} src={getImageUrl(image.file_url)} alt='Property'></img>
                    </div>

                )
            })}
        </Zoom >
    );
}