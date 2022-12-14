

import './Lists.css'

import ToDo from "./ToDo";

import photo1 from '../img/bill.png'
import photo2 from '../img/book.png'
import photo3 from '../img/check.png'
import photo4 from '../img/dance.png'
import photo5 from '../img/doing.png'
import photo6 from '../img/eat.png'
import photo7 from '../img/gym.png'
import photo8 from '../img/no.png'
import photo9 from '../img/organize.png'


const texts = [
    {
        url1: photo3,
        text: 'Hit the gym',
        url2: photo7,
    },
    {
        url1: photo3,
        text: 'Pay Bills',
        url2: photo1,
    },
    {
        url1: photo5,
        text: 'Meet George',
        url2: photo4,
    },
    {
        url1: photo5,
        text: 'Buy eggs',
        url2: photo6,
    },
    {
        url1: photo8,
        text: 'Read a book',
        url2: photo2,
    },
    {
        url1: photo8,
        text: 'Organize office',
        url2: photo9,
    }


]


const Lists = () => {
    return (
        <div className='container'>

            <div className='article'>
                <h1> <strong>T</strong>o do list</h1>

                {texts.map((el, i) => {
                    return (
                        <ToDo key={i}

                            text={el.text}
                            url1={el.url1}
                            url2={el.url2}

                        />
                    )
                })}
            </div>
        </div>
    )
}



export default Lists;
