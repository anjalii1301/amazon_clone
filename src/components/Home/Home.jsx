import './Home.css'
import Product from '../Product/Product'

const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digita
                                                  l/video/merch2016/Hero/Covid19/Generic/GWBleedingHer
                                             o_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt='' />
                <div className="home_row">
                    <Product
                        id="10378395"
                        title="The lean star"
                        price={250}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"

                    />

                      <Product
                        id="10334395"
                        title="RAISE White Women's Sneakers"
                        price={2250}
                        rating={5}
                        image="https://www.campusshoes.com/cdn/shop/products/RAISE_WHT_f1a5a2ec-8a23-4795-a796-0da7455dc57a.jpg?v=1705476016"

                    />

                    <Product
                        id="397789629"
                        title="Kenwood kMix Stand Mixer "
                        price={1500}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={2999}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating={4}
                    />
                    <Product
                        id="40385675"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={1999}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        rating={5}

                    />
                    <Product
                        id="65385086"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={30599}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="965323"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={15999}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={4}
                    />
                
                    <Product
                        id="965323"
                        title="Xiaomi 14 Ultra (White, 16GB RAM, 512GB Storage) | 50 MP Leica Quad Camera | 2K 120 Hz LTPO AMOLED"
                        price={14999}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmRkLSB2SpedTC0SBW8_48oW6gmfNWiWtzw&s"
                        rating={4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
