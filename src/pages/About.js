import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>Exercitation est minim esse in pariatur incididunt. Ullamco tempor amet eu mollit labore. Ullamco cillum excepteur aute labore. Sit ea ad cupidatat mollit id fugiat eiusmod dolore consequat esse nisi magna eu. Aute tempor et mollit aliquip dolore nostrud aliquip cupidatat incididunt incididunt adipisicing ut aliqua elit. Non irure consequat irure laboris duis minim quis.

                    Deserunt reprehenderit esse cillum eiusmod dolore eiusmod ex et eu magna elit ea irure nostrud. Dolore non irure do veniam culpa officia. Eiusmod nisi ex id qui amet consequat. Aute dolor nulla ipsum non labore consectetur consequat id. Adipisicing magna nostrud adipisicing adipisicing duis sunt ea est occaecat exercitation nisi dolore aute.

                    Reprehenderit pariatur est do commodo tempor do velit nisi aliqua sint aute sit voluptate esse. Consequat ullamco ea occaecat pariatur velit quis aute sit elit irure dolore eiusmod officia. Commodo Lorem ullamco ut occaecat.

                    Aute magna proident adipisicing dolor veniam incididunt officia adipisicing in nulla dolore reprehenderit ipsum proident. Occaecat culpa Lorem in laboris pariatur nisi veniam do sunt. Ea ea ullamco adipisicing adipisicing consectetur exercitation aliquip ad magna proident est nulla tempor officia. Deserunt aliqua mollit non ad non incididunt proident ex occaecat in nisi voluptate.</p>
            </div>
        </div>
    )
}

export default About