import React, { Component } from 'react';
import Styles from '../../assets/css/carousel_style.module.css';

/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
const slideWidth = 28;

const _items = [
    {
        player: {
            title: 'FORBES | 2020.11.1',
            desc: 'Forbes Ranks APEX Technologies as “China’s Top 50 Most Promising Private Companies”',
            image: './images/assets/newsroom_item.png'
        }
    },
    {
        player: {
            title: "SOURCE | 2020.11.1",
            desc: "Title of the Next Article Goes Here",
            image: './images/assets/newsroom_item.png'
        }
    },
    {
        player: {
            title: 'SOURCE | 2020.11.1',
            desc: 'Another article title goes here as well',
            image: './images/assets/newsroom_item.png'
        }
    },
    {
        player: {
            title: 'Mike Sigel',
            desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: './images/assets/newsroom_item.png'
        }
    },
    {
        player: {
            title: 'Willie Mosconi',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: './images/assets/newsroom_item.png'
        }
    },
    {
        player: {
            title: 'Willie Mosconi1',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: './images/assets/newsroom_item.png'
        }
    }
]

const _items_mobile = [
    {
        title: 'FORBES | 2020.11.1',
        desc: 'Forbes Ranks APEX Technologies as “China’s Top 50 Most Promising Private Companies”',
        image: './images/assets/newsroom_item.png'
    },
    {
        title: "SOURCE | 2020.11.1",
        desc: "Title of the Next Article Goes Here",
        image: './images/assets/newsroom_item.png'
    },
    {
        title: 'SOURCE | 2020.11.1',
        desc: 'Another article title goes here as well',
        image: './images/assets/newsroom_item.png'
    },
    {
        title: 'Mike Sigel',
        desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
        image: './images/assets/newsroom_item.png'
    },
    {
        title: 'Willie Mosconi',
        desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
        image: './images/assets/newsroom_item.png'
    },
    {
        title: 'Willie Mosconi1',
        desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
        image: './images/assets/newsroom_item.png'
    }
]

const length = _items.length
_items.push(..._items)


const sleep = (ms = 0) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const createItem = (position, idx, activeIdx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`
        },
        player: _items[idx].player
    }

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles, filter: 'grayscale(1)' }
            break
        case length:
            break
        default:
            item.styles = { ...item.styles, opacity: 0 }
            break
    }

    return item
}

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx)

    return (
        <li className={Styles.carousel__slide_item} style={item.styles}>
            <div className={Styles.carousel__slide_item_img_link}>
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className={Styles.carousel_slide_item__body}>
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </li >
    )
}

const keys = Array.from(Array(_items.length).keys())

const Carousel = () => {
    const [items, setItems] = React.useState(keys)
    const [isTicking, setIsTicking] = React.useState(false)
    const [activeIdx, setActiveIdx] = React.useState(0)
    const bigLength = items.length

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems(prev => {
                return prev.map((_, i) => prev[(i + jump) % bigLength])
            })
        }
    }

    const nextClick = (jump = 3) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems(prev => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength]
                )
            })
        }
    }

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false))
    }, [isTicking])

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items])

    return (
        <div className={Styles.carousel__wrap}>
            <div className={Styles.carousel__inner}>
                <div className={Styles.carousel__container}>
                    <ul className={Styles.carousel__slide_list}>
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <div>
                    <img src="./images/assets/btn_allow.png" alt="btn_allow" className={`${Styles.carousel__btn} ${Styles.carousel__btn_next}`}
                        onClick={() => nextClick()}
                    />
                </div>
            </div>
            <div className={Styles.carousel_mobile_container}>
                {
                    _items_mobile.map((val, index) => {
                        return (
                            <div key={index} className={Styles.mobile_img} style={{ marginBottom: '3rem' }}>
                                <div key={index + 1} className={Styles.mobile_img}>
                                    <img src={val.image} alt={index} key={index + 2} className={Styles.mobile_img} />
                                </div>
                                <div key={index + 3} style={{ marginTop: '1rem' }}>
                                    <p key={index + 4}>{val.title}</p>
                                    <h3 key={index + 5}>{val.desc}</h3>
                                </div>
                            </div >
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel;