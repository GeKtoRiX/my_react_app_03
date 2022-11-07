import { v4 as uuidv4 } from 'uuid';
const booksArr = [
    {
        img: 'https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg',
        title: 'I Love You to the Moon and Back',
        author: 'Amelia Hepworth',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Aliasvel veritatis eos eligendi vitae ad',
        id: uuidv4(),
    },
    {
        img: 'https://m.media-amazon.com/images/I/51qm5V-N1lL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        title: 'I Love You Like No Otter',
        author: 'Rose Rossner',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Aliasvel veritatis eos eligendi vitae ad',
        id: uuidv4(),
    },
    {
        img: 'https://m.media-amazon.com/images/I/51PRQuO-xjL._SY498_BO1,204,203,200_.jpg',
        title: 'If Animals Kissed Good Night',
        author: 'Ann Whitford Paul',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Aliasvel veritatis eos eligendi vitae ad',
        id: uuidv4(),
    },
];

export default booksArr;
